'use server'

import { appleRatingUrl } from '@/app/data/links'

// Utility function to add a hard timeout to fetch calls. Uses Promise.race so
// we stop waiting at `timeout`ms even if the fetch implementation ignores the
// AbortSignal (which can happen with some runtimes / Next.js fetch wrappers).
async function fetchWithTimeout(url: string, options: RequestInit & { timeout?: number } = {}) {
	const { timeout = 10000, ...fetchOptions } = options

	const controller = new AbortController()

	let timeoutId: ReturnType<typeof setTimeout> | undefined
	const timeoutPromise = new Promise<never>((_, reject) => {
		timeoutId = setTimeout(() => {
			controller.abort()
			reject(new Error(`Request timeout after ${timeout}ms`))
		}, timeout)
	})

	const fetchPromise = fetch(url, {
		...fetchOptions,
		signal: controller.signal,
	})
	// Swallow any late rejection (e.g. AbortError that fires after the race has
	// already been won by timeoutPromise) so it doesn't surface as an unhandled
	// promise rejection and crash the Node process.
	fetchPromise.catch(() => {})

	try {
		const response = await Promise.race([fetchPromise, timeoutPromise])
		return response
	} catch (error) {
		if (error instanceof Error && error.name === 'AbortError') {
			throw new Error(`Request timeout after ${timeout}ms`)
		}
		throw error
	} finally {
		if (timeoutId) clearTimeout(timeoutId)
	}
}

async function fetchWithRetry(url: string, options: RequestInit & { timeout?: number; retries?: number } = {}) {
	const { retries = 2, ...fetchOptions } = options
	let lastError: Error | null = null

	for (let attempt = 0; attempt <= retries; attempt++) {
		try {
			return await fetchWithTimeout(url, fetchOptions)
		} catch (error) {
			lastError = error instanceof Error ? error : new Error(String(error))

			if (attempt === retries) {
				break
			}

			const delay = Math.min(1000 * Math.pow(2, attempt), 5000)
			await new Promise(resolve => setTimeout(resolve, delay))
		}
	}

	throw lastError || new Error('Request failed after all retries')
}

export async function getAppleReviews() {
	try {
		const res = await fetchWithRetry(`https://api.shawn.party/api/podcast-data/apple?url=${appleRatingUrl}`, {
			next: { revalidate: 60 * 60 * 6 },
			timeout: 5000,
			retries: 1,
		})

		if (!res.ok) {
			console.warn(`Apple API error: ${res.status} ${res.statusText}`)
			return {}
		}

		const text = await res.text()
		if (!text || text.trim() === '') {
			console.warn('Apple API returned empty response')
			return {}
		}

		if (text.toLowerCase().startsWith('an error') || text.toLowerCase().includes('error')) {
			console.warn('Apple API returned error message:', text)
			return {}
		}

		const data = JSON.parse(text)
		const { rating, ratingsUrl, reviews } = data

		return {
			appleRating: rating,
			appleRatingUrl: ratingsUrl,
			reviews,
		}
	} catch (e) {
		console.warn('Apple API fetch error:', e)
		return {}
	}
}

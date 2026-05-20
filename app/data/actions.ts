'use server'

import { fetchWithRetry } from '@shawnphoffman/pod-sites-shared/fetch'

import { appleRatingUrl, spotifyUrl } from '@/app/data/links'

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

export async function getSpotifyReviews() {
	try {
		const res = await fetchWithRetry(`https://api.shawn.party/api/podcast-data/spotify-scrape?url=${spotifyUrl}`, {
			next: { revalidate: 60 * 60 * 6 },
			timeout: 5000,
			retries: 1,
		})

		if (!res.ok) {
			console.warn(`Spotify API error: ${res.status} ${res.statusText}`)
			return {}
		}

		const text = await res.text()
		if (!text || text.trim() === '') {
			console.warn('Spotify API returned empty response')
			return {}
		}

		if (text.toLowerCase().startsWith('an error') || text.toLowerCase().includes('error')) {
			console.warn('Spotify API returned error message:', text)
			return {}
		}

		const data = JSON.parse(text)
		return {
			url: data?.url,
			rating: data?.vals?.rating ? Number(data?.vals?.rating) : undefined,
		}
	} catch (error) {
		console.warn('Failed to fetch Spotify data', error)
		return {}
	}
}

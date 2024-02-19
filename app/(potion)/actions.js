'use server'

import { XMLParser } from 'fast-xml-parser'
import { sanitize } from 'isomorphic-dompurify'

import { rssFeedUrl, spotifyUrl } from './home/links'

function replaceHtmlLinks(htmlString) {
	const hrefRegex = /<a\s+(?:[^>]*?\s+)?href="([^"]*)"[^>]*>(.*?)<\/a>/gi
	htmlString = htmlString.replace(hrefRegex, (match, href) => href)

	const brRegex = /<br\s*\/?>/gi
	htmlString = htmlString.replace(brRegex, '')

	return htmlString
}

function convertPToLineBreaks(input) {
	// Use regular expression to match <p> tags with content
	const regex = /<p>(.*?)<\/p>/g

	// Replace <p> tags with their content, adding line breaks
	const result = input.replace(regex, (match, group) => {
		if (group.trim() !== '') {
			return group + '\n'
			// return group + '\n\n'
		} else {
			return '' // Remove empty <p> tags
		}
	})

	return result
}

export async function getReviews() {
	try {
		const res = await fetch('https://api.shawn.party/api/high-potion/reviews', { next: { revalidate: 60 * 60 * 1 } })
		const data = await res.json()
		const { rating, ratingsUrl, reviews } = data

		return {
			appleRating: rating,
			appleRatingUrl: ratingsUrl,
			reviews,
		}
	} catch (e) {
		console.error(e)
		return {}
	}
}

export async function getSpotifyReviews() {
	try {
		const res = await fetch(`https://api.shawn.party/api/pod-data/spotify?url=${spotifyUrl}`, {
			next: { revalidate: 60 * 60 * 1 },
		})
		const data = await res.json()
		return data
	} catch {
		return {}
	}
}

export async function getEpisodes() {
	try {
		const res = await fetch(rssFeedUrl, {
			next: { revalidate: 60 * 60 * 1 },
		})
		const xml = await res.text()
		const parser = new XMLParser({
			ignoreAttributes: false,
			attributeNamePrefix: '@_',
		})
		const parsed = parser.parse(xml)
		const episodes = parsed.rss.channel.item.map(ep => ({
			guid: ep.guid['#text'],
			title: ep.title,
			imgSrc: ep['itunes:image']['@_href'],
			// summary: sanitize(convertPToLineBreaks(ep['itunes:summary'].replace(/<p><br><\/p>|\n/gim, ''))),
			summary: sanitize(replaceHtmlLinks(convertPToLineBreaks(ep['itunes:summary'].replace(/<p><br><\/p>|\n/gim, '')))),
			link: ep.link,
			pubDate: ep.pubDate,
		}))
		return {
			episodes,
		}
	} catch (error) {
		return {}
	}
}

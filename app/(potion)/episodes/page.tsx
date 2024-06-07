import { XMLParser } from 'fast-xml-parser'
import { sanitize } from 'isomorphic-dompurify'

import { rssFeedUrl } from '@/app/data/links'
import Episodes from '@/components/core/Episodes'

async function getEpisodes() {
	try {
		const res = await fetch(rssFeedUrl, {
			next: { tags: ['episodes'] },
		})
		const xml = await res.text()
		const parser = new XMLParser({
			ignoreAttributes: false,
			attributeNamePrefix: '@_',
		})
		const parsed = parser.parse(xml)
		const episodes = parsed.rss.channel.item.map(ep => {
			return {
				guid: ep.guid['#text'],
				title: ep.title,
				imgSrc: ep['itunes:image'] ? ep['itunes:image']['@_href'] : parsed.rss.channel['itunes:image']['@_href'],
				summary: cleanEpisodeSummary(ep['itunes:summary']),
				link: ep.link,
				pubDate: ep.pubDate,
			}
		})
		return {
			episodes,
		}
	} catch (error) {
		console.error('getEpisodes', error)
		return {}
	}
}

// NOTE Loading.tsx wraps Pages in Suspense but it seems to only work when it is nested and not the root Loading component

export default async function EpisodesPage() {
	const data = await getEpisodes()
	return (
		<div className="w-full max-w-3xl">
			<Episodes episodes={data.episodes} />
		</div>
	)
}

function cleanEpisodeSummary(text: string) {
	text = sanitize(text, { ALLOWED_TAGS: ['a'] })

	text = text.replace(/<a\s+(?:[^>]*?\s+)?href="([^"]*)"[^>]*>(.*?)<\/a>/gi, (_match, href) => href)

	text = text.replace(/Come hang out[\s\S]*$/is, '').trim()
	text = text.replace(/Follow us[\s\S]*$/is, '').trim()

	return text
}

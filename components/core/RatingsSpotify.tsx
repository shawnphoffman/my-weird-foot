import { faStarSharp } from '@awesome.me/kit-d7ccc5bb1a/icons/classic/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { spotifyUrl } from '@/app/data/links'

async function getSpotifyReviews() {
	try {
		const res = await fetch(`https://api.shawn.party/api/pod-data/spotify?url=${spotifyUrl}`, {
			next: { revalidate: 21600 }, // 60 * 60 * 6
		})
		const data = await res.json()
		// console.log('getSpotifyReviews', data)
		return data
	} catch {
		return {}
	}
}

export default async function RatingsSpotify() {
	const spotifyData = await getSpotifyReviews()

	if (!spotifyData || !spotifyData.rating) return null

	return (
		<a
			className="flex flex-row items-center px-2 py-1 text-xs font-bold leading-normal text-white rounded-lg whitespace-nowrap bg-spotify"
			href={spotifyData.url || ''}
			target="_blank"
			rel="noopener noreferrer"
		>
			<div>{spotifyData.rating.toFixed(1)}</div>
			<FontAwesomeIcon icon={faStarSharp} className="text-[0.85em] mx-0.5" />
			<div>on Spotify</div>
		</a>
	)
}

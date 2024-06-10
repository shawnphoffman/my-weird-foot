import { faDiscord, faSpotify, faTwitch, faXTwitter } from '@awesome.me/kit-d7ccc5bb1a/icons/classic/brands'
import { faRssSquare, faSnake } from '@awesome.me/kit-d7ccc5bb1a/icons/classic/solid'
import { faAt, faPodcast } from '@awesome.me/kit-d7ccc5bb1a/icons/duotone/solid'
import { faCastbox, faGoodpods, faOvercast, faTeepublic } from '@awesome.me/kit-d7ccc5bb1a/icons/kit/custom'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export const spotifyId = '3Di7qFLy6FoNg6zcBGaOnK'
export const spotifyUrl = `https://open.spotify.com/show/${spotifyId}`
export const applePodcastId = '1571377051'
export const applePodcastUrl = `https://podcasts.apple.com/us/podcast/id${applePodcastId}`
export const appleRatingUrl = `${applePodcastUrl}?see-all=reviews`
export const rssFeedUrl = 'https://anchor.fm/s/5dc2916c/podcast/rss'
export const goodpodsUrl = 'https://goodpods.com/podcasts/high-potion-265438'

type Link = {
	title: string
	href: string
	icon: IconDefinition
	background: string
	color?: string
}

const items: Link[] = [
	{
		title: 'Twitter',
		href: 'https://twitter.com/HighPotionPod',
		background: 'bg-twitter',
		icon: faXTwitter,
	},
	{
		title: 'Spotify',
		href: spotifyUrl,
		background: 'bg-spotify',
		icon: faSpotify,
	},
	{
		title: 'Apple Podcasts',
		href: `https://podcasts.apple.com/us/podcast/high-potion/id${applePodcastId}`,
		background: 'bg-applepodcasts',
		icon: faPodcast,
	},
	{
		title: 'Emails',
		href: 'mailto:highpotionpod@gmail.com',
		icon: faAt,
		background: 'bg-email',
	},
	{
		title: 'Goodpods',
		href: goodpodsUrl,
		icon: faGoodpods,
		background: 'bg-goodpods',
		color: 'text-black',
	},
	{
		title: 'Overcast',
		// overcast://x-callback-url/add?url=https%3A%2F%2Ffeed.podbean.com%2Fblueharvestpodcast%2Ffeed.xml
		href: `https://overcast.fm/itunes${applePodcastId}`,
		icon: faOvercast,
		background: 'bg-overcast',
	},
	{
		title: 'RSS',
		href: rssFeedUrl,
		icon: faRssSquare,
		background: 'bg-rss',
	},
	{
		title: 'Castbox',
		href: 'https://castbox.fm/channel/High-Potion-id4226986',
		background: 'bg-castbox',
		icon: faCastbox,
	},
	{
		title: 'Twitch',
		href: 'http://www.twitch.tv/blueharvestpod',
		background: 'bg-twitch',
		icon: faTwitch,
	},
	{
		title: 'Merch Store',
		href: 'https://www.teepublic.com/user/high-potion-podcast',
		icon: faTeepublic,
		background: 'bg-teepublic',
	},
	{
		title: 'Discord',
		href: 'https://discord.gg/CZFSuSpmD8',
		icon: faDiscord,
		background: 'bg-discord',
	},
	{
		title: 'Stoned Cobra',
		href: 'https://stonedcobra.bandcamp.com/',
		icon: faSnake,
		background: 'bg-hp1',
	},
]

export default items

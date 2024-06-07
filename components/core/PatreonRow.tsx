import { faPatreon } from '@awesome.me/kit-d7ccc5bb1a/icons/classic/brands'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'America/Los_Angeles' } as const
export default function PatreonRow({ data: d }) {
	const pubDate = new Date(d.pubDate).toLocaleDateString('en-US', options)
	return (
		<a
			className="flex flex-row p-2 hover:bg-boba-grayn/10 justify-between items-center transition-colors hover:text-white text-boba-green"
			href={d.link}
			target="_blank"
			rel="noopener noreferrer"
			// title={d.description || ''}
		>
			<FontAwesomeIcon icon={faPatreon} className="flex-0 text-2xl text-patreon" />
			<div className="flex-1 mx-4 text-left flex flex-col w-full gap-1">
				<div className="text-lg font-bold leading-tight text-pretty">{d.title}</div>
				<div className="text-boba-grayn text-xs">{pubDate}</div>
			</div>
		</a>
	)
}

import Image from 'next/image'

import EpisodeSummary from './EpisodeSummary'

const options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'America/Los_Angeles' } as const

export default function Episodes({ episode }) {
	const pubDate = new Date(episode.pubDate).toLocaleDateString('en-US', options)
	return (
		<section className="flex flex-col justify-start w-full gap-2 py-4 text-sm text-left sm:gap-4" id={episode.guid}>
			<h2 className="text-xl font-bold text-center text-white">{episode.title}</h2>
			<div className="flex flex-col items-center justify-start gap-4 sm:flex-row md:items-start">
				<Image
					src={episode.imgSrc}
					alt={episode.title}
					className="hidden w-24 rounded sm:flex md:w-32 h-fit aspect-square"
					width={128}
					height={128}
				/>
				<div className="flex flex-col self-stretch gap-2 overflow-hidden whitespace-break-spaces text-wrap text-ellipsis">
					<div className="text-xs text-hp3">{pubDate}</div>
					{episode.summary && (
						<div className="[&_a]:text-hp3 decoration-hp4 mb-1 [&_a]:pb-0.5 [&_a]:font-bold decoration-dashed [&_a:hover]:underline [&_a]:break-words underline-offset-2">
							<EpisodeSummary summary={episode.summary} />
						</div>
					)}
					<div className="flex items-end flex-1">
						<a
							className="text-base font-bold text-hp3 decoration-hp4 hover:underline underline-offset-2 decoration-dashed"
							target="_blank"
							href={episode.link ? episode.link : 'https://zencastr.com/Just-Shillin'}
						>
							Episode Link
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

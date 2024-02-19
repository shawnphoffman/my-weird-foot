import { Suspense } from 'react'

import { getEpisodes } from 'app/(potion)/actions'
// import Loading from 'components/Loading'
// import Episode from 'components/Episode'
import Episodes from 'components/potion/Episodes'

export const revalidate = 60 * 60 // 1 hour
export const dynamic = 'force-dynamic'

const EpisodesClient = async () => {
	const [data] = await Promise.all([
		getEpisodes(),
		//
		// new Promise(resolve => setTimeout(resolve, 5000)),
	])
	// return data.episodes.map(ep => <Episode episode={ep} key={ep.guid} />)

	return <Episodes episodes={data.episodes} />
}

export default async function EpisodesPage() {
	return (
		<div className="episodesContainer">
			<Suspense>
				<EpisodesClient />
			</Suspense>
		</div>
	)
}

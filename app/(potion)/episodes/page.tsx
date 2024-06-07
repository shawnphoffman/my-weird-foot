import { Suspense } from 'react'

import { getEpisodes } from '@/app/(potion)/actions'
// import Loading from '@/components/Loading'
// import Episode from '@/components/Episode'
import Episodes from '@/components/potion/Episodes'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

const EpisodesClient = async () => {
	// await new Promise(resolve => setTimeout(resolve, 5000))
	const data = await getEpisodes()

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

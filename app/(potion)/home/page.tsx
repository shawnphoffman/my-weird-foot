import { Suspense } from 'react'

import items from '@/app/data/links'
import Awards from '@/components/core/Awards'
import LinkCard from '@/components/core/LinkCard'
import Loading from '@/components/core/Loading'
import RatingsApple from '@/components/core/RatingsApple'
import RatingsGoodpods from '@/components/core/RatingsGoodpods'
import RatingsSpotify from '@/components/core/RatingsSpotify'
import Reviews from '@/components/core/Reviews'

export default async function HighPotionHome({}) {
	return (
		<>
			<div className="w-full max-w-3xl text-base leading-normal sm:text-lg">
				A podcast where hosts Steve Krothe and Hawes Burkhardt talk about video games. Yes, another video game podcast hosted by two dudes.
				Check us out though, it&apos;s a lot of fun!
			</div>

			<div className="flex flex-row flex-wrap items-center justify-center gap-2">
				<Suspense fallback="">
					<RatingsApple />
					<RatingsGoodpods />
					<RatingsSpotify />
				</Suspense>
			</div>

			<div className="flex flex-row flex-wrap justify-center w-full gap-4 mt-4 mb-4">
				{items.map((item, i) => {
					return (
						<LinkCard
							key={item.title}
							title={item.title}
							link={item.href}
							icon={item.icon}
							bg={item.background}
							color={item.color}
						></LinkCard>
					)
				})}
			</div>

			<Suspense>
				<Awards />
			</Suspense>

			<Suspense fallback={<Loading />}>
				<Reviews />
			</Suspense>
		</>
	)
}

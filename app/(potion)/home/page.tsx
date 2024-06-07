import { Suspense } from 'react'

import items from '@/app/data/links'
import LinkCard from '@/components/core/LinkCard'
import RatingsApple from '@/components/core/RatingsApple'
import RatingsGoodpods from '@/components/core/RatingsGoodpods'
import RatingsSpotify from '@/components/core/RatingsSpotify'
import Reviews from '@/components/potion/Reviews'

export default async function HighPotionHome({}) {
	return (
		<>
			<div className={'pageDescription'}>
				A podcast where hosts Steve Krothe and Hawes Burkhardt talk about video games. Yes, another video game podcast hosted by two dudes.
				Check us out though, it&apos;s a lot of fun!
			</div>
			<div className="flex flex-row flex-wrap items-center justify-center gap-2 mb-2">
				<Suspense fallback="">
					<RatingsApple />
					<RatingsGoodpods />
					<RatingsSpotify />
				</Suspense>
			</div>
			<div className={'pageRow'}>
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

			<div className={'pageRow'}>
				<Reviews />
			</div>
		</>
	)
}

import { Suspense } from 'react'

import LinkCard from 'components/potion/LinkCard'
import RatingsApple from 'components/potion/RatingsApple'
import RatingsSpotify from 'components/potion/RatingsSpotify'
import Reviews from 'components/Reviews/Reviews'

import items from './links'

export default async function HighPotionHome({}) {
	return (
		<>
			<div className={'pageDescription'}>
				A podcast where hosts Steve Krothe and Hawes Burkhardt talk about video games. Yes, another video game podcast hosted by two dudes.
				Check us out though, it&apos;s a lot of fun!
			</div>
			<div className="ratingsWrapper">
				<Suspense>
					<RatingsApple />
					<RatingsSpotify />
				</Suspense>
			</div>
			<div className={'pageRow'}>
				{items.map((item, i) => {
					return (
						<LinkCard
							i={i}
							key={item.title}
							title={item.title}
							subtitle={item.subtitle}
							link={item.href}
							icon={item.icon}
							cover={item.image}
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

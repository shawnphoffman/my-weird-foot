import { faStarSharp } from '@awesome.me/kit-d7ccc5bb1a/icons/classic/solid'
import { Awards, RatingsApple, RatingsGoodpods, RatingsSpotify } from '@shawnphoffman/pod-sites-shared/ratings'
import { Suspense } from 'react'

import { getAppleReviews, getSpotifyReviews } from '@/app/data/actions'
import items, { appleRatingUrl, goodpodsUrl, spotifyUrl } from '@/app/data/links'
import LinkCard from '@/components/core/LinkCard'
import Loading from '@/components/core/Loading'
import Reviews from '@/components/core/Reviews'
import { getAwards } from '@/sanity/sanity.requests'

export default async function HighPotionHome() {
	return (
		<>
			<div className="w-full max-w-3xl text-base leading-normal sm:text-lg">
				A podcast where hosts Steve Krothe and Hawes Burkhardt talk about video games. Yes, another video game podcast hosted by two dudes.
				Check us out though, it&apos;s a lot of fun!
			</div>

			<div className="flex flex-row flex-wrap items-center justify-center gap-2">
				<Suspense fallback="">
					<RatingsApple appleRatingUrl={appleRatingUrl} getReviews={getAppleReviews} starIcon={faStarSharp} />
					<RatingsGoodpods goodpodsUrl={goodpodsUrl} starIcon={faStarSharp} />
					<RatingsSpotify spotifyUrl={spotifyUrl} getReviews={getSpotifyReviews} starIcon={faStarSharp} />
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
				<Awards getAwards={getAwards} />
			</Suspense>

			<Suspense fallback={<Loading />}>
				<Reviews />
			</Suspense>
		</>
	)
}

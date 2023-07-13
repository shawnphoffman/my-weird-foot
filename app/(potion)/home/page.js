import { memo } from 'react'

import LinkCard from 'components/LinkCard/LinkCard'
// import Ratings from 'components/Ratings/Ratings'
// import Reviews from 'components/Reviews/Reviews'
import items from 'config/links'

import styles from '../HighPotion.module.css'

// const appleRating = '5.0'
// const appleRatingUrl = 'https://podcasts.apple.com/us/podcast/high-potion/id1540630919'

const HighPotionHome = ({}) => {
	return (
		<>
			<div className={styles.pageDescription}>
				A podcast where hosts Steve Krothe and Hawes Burkhardt talk about video games. Yes, another video game podcast hosted by two dudes.
				Check us out though, it&apos;s a lot of fun!
			</div>
			{/* <Ratings appleRating={appleRating} appleRatingUrl={appleRatingUrl} /> */}
			<div className={styles.pageRow}>
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

			<div className={styles.pageRow}>{/* <Reviews reviews={reviews} /> */}</div>
		</>
	)
}

export default memo(HighPotionHome)

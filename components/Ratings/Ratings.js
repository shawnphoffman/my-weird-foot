import { memo } from 'react'

import styles from './Ratings.module.css'

const dataUrl = 'https://api.shawn.party/api/high-potion/reviews'

const Ratings = async () => {
	const res = await fetch(dataUrl, { next: { revalidate: 60 * 60 * 12 } })
	const json = await res.json()

	const data = json?.rating
		? {
				appleRating: json.rating,
				appleRatingUrl: json.ratingsUrl,
		  }
		: {}

	if (!data || !data.appleRating) return null

	return (
		<a className={styles.container} href={data.appleRatingUrl || ''} target="_blank" rel="noopener noreferrer">
			<div>{data.appleRating}</div>
			<i className={`fa-solid fa-star-sharp ${styles.star}`} />
			<div>on Apple Podcasts</div>
		</a>
	)
}

export default memo(Ratings)

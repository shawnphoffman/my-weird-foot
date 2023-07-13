import { memo } from 'react'

import styles from './Ratings.module.css'

const Ratings = props => {
	if (!props || !props.appleRating) return null

	return (
		<a className={styles.container} href={props.appleRatingUrl || ''} target="_blank" rel="noopener noreferrer">
			<div>{props.appleRating}</div>
			<i className={`fa-solid fa-star-sharp ${styles.star}`} title="Stars" />
			<div>on Apple Podcasts</div>
		</a>
	)
}

export default memo(Ratings)

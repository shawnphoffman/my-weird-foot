import { memo, useMemo } from 'react'

import styles from './GoButton.module.css'

const GoButton = ({ i }) => {
	const destination = useMemo(() => {
		if (!i) return null

		return i === 1
			? {
					href: 'https://blueharvest.rocks',
					title: 'Blue Harvest',
			  }
			: {
					href: '/home',
					title: 'High Potion',
			  }
	}, [i])

	if (!i) return null

	return (
		<div className={styles.container}>
			<a className={styles.button} href={destination.href}>
				Visit {destination.title}
			</a>
		</div>
	)
}

export default memo(GoButton)

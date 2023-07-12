import { memo } from 'react'

import styles from '../HighPotion.module.css'

const HighPotionHome = ({}) => {
	return (
		<div className={styles.pageDescription}>
			<h1>Home</h1>
		</div>
	)
}

export default memo(HighPotionHome)

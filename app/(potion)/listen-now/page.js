import { memo } from 'react'

import styles from '../HighPotion.module.css'

const ListenNow = ({}) => {
	return (
		<div className={styles.pageDetails}>
			<div className={styles.pageDescription}>
				<h1>Listen Now</h1>
			</div>
		</div>
	)
}

export default memo(ListenNow)

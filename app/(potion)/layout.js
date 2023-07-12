import { memo } from 'react'
import Image from 'next/image'

import NavBar from 'components/NavBar/NavBar'

import highPotionLogo from './high-potion.png'
import styles from './HighPotion.module.css'

const HighPotionLayout = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.page}>
				<div className={styles.header}>
					<Image className={styles.headerLogo} alt="High Potion" src={highPotionLogo} width={600} height={198.32} priority />
					<NavBar />
				</div>
				<div className={styles.pageDetails}>{children}</div>
			</div>
		</div>
	)
}

export default memo(HighPotionLayout)

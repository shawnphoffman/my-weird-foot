import { memo } from 'react'
import Image from 'next/image'

import NavBar from 'components/NavBar/NavBar'

import highPotionLogo from './high-potion.png'
import styles from './HighPotion.module.css'

export const metadata = {
	title: 'High Potion',
	description: 'A video game podcast hosted by Steve Krothe and Hawes Burkhardt',
	openGraph: {
		title: 'High Potion',
		description: 'A video game podcast hosted by Steve Krothe and Hawes Burkhardt',
		url: 'https://myweirdfoot.com',
		locale: 'en_US',
		type: 'website',
	},
}

const HighPotionLayout = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.page}>
				<div className={styles.header}>
					<Image className={styles.headerLogo} alt="High Potion" src={highPotionLogo} width={500} height={165.41} priority />
					<NavBar />
				</div>
				<div className={styles.pageDetails}>{children}</div>
			</div>
		</div>
	)
}

export default memo(HighPotionLayout)

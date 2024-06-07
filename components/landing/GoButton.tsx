import { useMemo } from 'react'
import Image from 'next/image'

import bh from '@/components/landing/images/titleBlueHarvest@3x.png'
import hp from '@/components/landing/images/titleHighPotion@3x.png'
import visit from '@/components/landing/images/titleVisit@3x.png'

import styles from './GoButton.module.css'

export default function GoButton({ i }) {
	const destination = useMemo(() => {
		if (!i)
			return {
				href: '/',
			}

		return i === 1
			? {
					href: 'https://blueharvest.rocks',
					title: 'Blue Harvest',
					parentClass: styles.bh,
			  }
			: {
					href: '/home',
					title: 'High Potion',
					parentClass: styles.hp,
			  }
	}, [i])

	return (
		<div className={`${styles.container} ${destination.parentClass ?? ''}`}>
			<a className={styles.button} href={destination.href}>
				<Image className={styles.image} alt="" src={visit} width={600} height={79} draggable="false" loading="eager" priority />
				<Image className={`${styles.image} ${styles.bh_img}`} alt="" src={bh} width={600} height={79} draggable="false" />
				<Image className={`${styles.image} ${styles.hp_img}`} alt="" src={hp} width={600} height={79} draggable="false" />
			</a>
		</div>
	)
}

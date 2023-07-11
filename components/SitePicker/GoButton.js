import { memo, useMemo } from 'react'
import Image from 'next/image'

import bh from 'components/SitePicker/images/titleBlueHarvest@3x.png'
import hp from 'components/SitePicker/images/titleHighPotion@3x.png'
import visit from 'components/SitePicker/images/titleVisit@3x.png'

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
				<Image className="go-image" alt="Visit" src={visit} width={600} height={79} draggable="false" priority />
				<Image className="go-image" alt="" src={i === 1 ? bh : hp} width={600} height={79} draggable="false" priority />
			</a>

			{/* <div style={{ display: 'flex', flexDirection: 'column' }}>
				<Image className="" alt="Visit" src={visit} width={600} height={79} draggable="false" priority />
				<Image className="" alt="" src={i === 1 ? bh : hp} width={600} height={79} draggable="false" priority />
			</div> */}
		</div>
	)
}

export default memo(GoButton)

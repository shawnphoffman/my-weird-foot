import './landing.css'

import { memo, Suspense } from 'react'
import Image from 'next/image'

import playerSelect from 'components/landing/images/playerSelect@3x.png'
import SitePicker from 'components/landing/SitePicker'

export default async function Landing() {
	return (
		<div className="landing-container">
			<Image className="player-select" alt="Player Select" src={playerSelect} width={600} height={142} draggable="false" priority />
			<Suspense>
				<SitePicker />
			</Suspense>
		</div>
	)
}

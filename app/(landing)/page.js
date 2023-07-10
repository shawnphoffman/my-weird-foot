import './landing.css'

import { memo } from 'react'
import Image from 'next/image'

import playerSelect from 'components/SitePicker/images/playerSelect@3x.png'
import SitePicker from 'components/SitePicker/SitePicker'

const Landing = () => {
	return (
		<div className="landing-container">
			{/* <Image className="player-select" alt="Player Select" src={playerSelect} width={800} height={200} draggable="false" priority /> */}
			<Image className="player-select" alt="Player Select" src={playerSelect} width={600} height={150} draggable="false" priority />

			<SitePicker />
		</div>
	)
}

export default memo(Landing)

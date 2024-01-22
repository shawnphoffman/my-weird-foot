import './adventure.css'

import { memo } from 'react'
import { GeistMono } from 'geist/font/mono'
import Image from 'next/image'

import highPotionLogo from '../(potion)/high-potion.png'

export const metadata = {
	title: 'High Potion',
	description: 'A video game podcast hosted by Steve Krothe and Hawes Burkhardt',
	openGraph: {
		title: 'High Potion',
		description: 'A video game podcast hosted by Steve Krothe and Hawes Burkhardt',
		url: 'https://myweirdfoot.com/home',
		locale: 'en_US',
		type: 'website',
	},
}

const AdventureLayout = ({ children }) => {
	return (
		<div className={`${GeistMono.className} adventureWrapper`}>
			<div className="adventureHeader">
				<Image className="adventureLogo" alt="High Potion" src={highPotionLogo} width={500 / 3} height={165 / 3} priority />
			</div>
			<div className="adventureDetails">{children}</div>
		</div>
	)
}

export default memo(AdventureLayout)

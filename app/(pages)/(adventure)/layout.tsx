import './adventure.css'

import { GeistMono } from 'geist/font/mono'
import Image from 'next/image'

// import highPotionLogo from '../(potion)/high-potion.png'
import adventureLogo from './adventure.png'

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

export default async function AdventureLayout({ children }) {
	return (
		<html>
			<body className="px-4">
				<div className={`${GeistMono.className} adventureWrapper`}>
					<div className="adventureHeader">
						<Image className="adventureLogo" alt="High Potion" src={adventureLogo} width={385 / 2} height={151 / 2} priority />
					</div>
					<div className="adventureDetails">{children}</div>
				</div>
			</body>
		</html>
	)
}

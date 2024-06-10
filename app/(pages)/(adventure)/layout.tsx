import './adventure.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

import { GeistMono } from 'geist/font/mono'
import Image from 'next/image'
import Link from 'next/link'

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
		<html className="bg-hp-bg !bg-gradient-to-b from-hp-bg to-black">
			<body className="px-4">
				<div className={`${GeistMono.className} flex flex-col items-center max-w-screen-xl w-full mx-auto h-dvh`}>
					<Link className="flex flex-col items-center text-center" href="/home">
						<Image className="w-full h-auto my-1 max-w-96" alt="High Potion" src={adventureLogo} width={192} priority />
					</Link>
					<div className="flex flex-col items-center flex-1 w-full mb-4 overflow-hidden text-center h-100">{children}</div>
				</div>
			</body>
		</html>
	)
}

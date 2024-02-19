import './hp_global.css'

import Image from 'next/image'

import ActiveLink from 'components/potion/ActiveLink'

import { applePodcastId } from './home/links'
import highPotionLogo from './high-potion.png'

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
	itunes: {
		appId: applePodcastId,
	},
}

export default async function HighPotionLayout({ children }) {
	return (
		<div className={'wrapper'}>
			<div className={'page'}>
				<div className={'header'}>
					<Image className={'headerLogo'} alt="High Potion" src={highPotionLogo} width={500} height={165} priority />
					<div className="navContainer">
						<ActiveLink href="/home" label="Links" />
						{/* <ActiveLink href="/episodes" label="Episodes" /> */}
						<ActiveLink href="/listen-now" label="Listen Now" />
						<ActiveLink href="/adventure" label="Adventure" />
					</div>
				</div>
				<div className={'pageDetails'}>{children}</div>
			</div>
		</div>
	)
}

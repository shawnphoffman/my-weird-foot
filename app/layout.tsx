import './global.css'

import { Analytics } from '@vercel/analytics/react'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
	title: 'My Weird Foot',
	description: 'Landing page for Blue Harvest and High Potion podcasts',
	metadataBase: new URL('https://myweirdfoot.com'),
	openGraph: {
		title: 'My Weird Foot',
		description: 'Landing page for Blue Harvest and High Potion podcasts',
		url: 'https://myweirdfoot.com',
		locale: 'en_US',
		type: 'website',
	},
}

export default async function RootLayout({ children }) {
	return (
		<html lang="en" className={openSans.className}>
			<head>
				<script src="https://kit.fontawesome.com/d7ccc5bb1a.js" crossOrigin="anonymous" async defer></script>
			</head>
			<body>
				<div className="scroller">{children}</div>
				<Analytics />
			</body>
		</html>
	)
}

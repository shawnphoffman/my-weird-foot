import 'styles/globals.css'

import { Open_Sans } from 'next/font/google'
import Script from 'next/script'

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

export default function RootLayout({ children }) {
	return (
		<html lang="en" style={{ fontFamily: openSans.style.fontFamily }}>
			<head>
				{/* <!-- FontAwesome Icons --> */}
				<Script src="https://kit.fontawesome.com/d7ccc5bb1a.js" strategy="afterInteractive" rel="preload" as="font" />
			</head>
			<body>
				<div className="scroller">{children}</div>
			</body>
		</html>
	)
}

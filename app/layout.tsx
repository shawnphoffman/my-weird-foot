import '@/app/global.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

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
		<html lang="en" className={`${openSans.className} bg-hp-bg bg-gradient-to-b from-hp-bg to-black p-0 m-0 overflow-x-hidden w-dvw`}>
			<body className="p-4 mx-auto my-0 text-white min-h-dvh w-dvw">
				{children}
				{/* EXTRAS */}
				{process.env.VERCEL_ENV && <Analytics />}
			</body>
		</html>
	)
}

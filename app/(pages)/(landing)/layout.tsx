import './landing.css'

import { Analytics } from '@vercel/analytics/react'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({ subsets: ['latin'] })

type Props = {
	children: React.ReactNode
}

export default function LandingLayout({ children }: Props) {
	return (
		<html lang="en" className={`${openSans.className} p-0 m-0 overflow-x-hidden w-dvw`}>
			<body className="mx-auto my-0 text-white min-h-dvh w-dvw">
				{children}
				{/* EXTRAS */}
				{process.env.VERCEL_ENV && <Analytics />}
			</body>
		</html>
	)
}

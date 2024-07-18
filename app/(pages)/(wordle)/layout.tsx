import './wordle.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

import { GeistMono } from 'geist/font/mono'
import Image from 'next/image'
import Link from 'next/link'

import highPotionLogo from '@/app/images/high-potion.png'

export default async function WordleLayout({ children }) {
	return (
		<html className="bg-hp-bg !bg-gradient-to-b from-hp-bg to-black">
			<body className="px-4">
				<div className={`${GeistMono.className} flex flex-col items-center max-w-screen-xl w-full mx-auto h-dvh`}>
					<Link className="flex flex-col items-center text-center" href="/home">
						<Image className="w-full max-w-md" alt="" src={highPotionLogo} width={448} priority />
					</Link>
					<div className="flex flex-col items-center justify-center flex-1 w-full mb-4 overflow-hidden text-center">{children}</div>
				</div>
			</body>
		</html>
	)
}

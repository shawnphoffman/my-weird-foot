import './tetris.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

import { GeistMono } from 'geist/font/mono'
import Image from 'next/image'
import Link from 'next/link'

import logo from './tetris-title.png'

export default async function TetrisLayout({ children }) {
	return (
		<html className="bg-hp-bg !bg-gradient-to-b from-hp-bg to-black">
			<body className="px-4">
				<div className={`${GeistMono.className} flex flex-col items-center max-w-screen-xl w-full mx-auto h-dvh`}>
					<Link className="flex flex-col items-center text-center" href="/home">
						<Image className="w-full h-auto my-1 max-w-96" alt="High Potion" src={logo} width={192} priority />
					</Link>
					<div className="flex flex-col items-center justify-center flex-1 w-full mb-4 overflow-hidden text-center">{children}</div>
					{/* {children} */}
				</div>
			</body>
		</html>
	)
}

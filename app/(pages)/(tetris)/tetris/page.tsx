import { Metadata } from 'next'

import Tetris from './Tetris'

export const metadata: Metadata = {
	title: 'High Potion',
	description: 'A video game podcast hosted by Steve Krothe and Hawes Burkhardt',
	openGraph: {
		title: 'High Potion Tetris',
		// description: 'A High Potion text adventure game hosted by Steve Krothe and Hawes Burkhardt',
		url: 'https://myweirdfoot.com/tetris',
		locale: 'en_US',
		type: 'website',
	},
}

export default function TetrisPage() {
	return (
		<div className="flex flex-row gap-4 max-w-screen-xl mx-auto my-0 w-full flex-1 bg-black rounded-2xl border-2 border-hp2 p-4 h-full max-[420px]:p-2">
			<div className="flex flex-col justify-center flex-1 w-full text-white">
				<Tetris />
			</div>
		</div>
	)
}

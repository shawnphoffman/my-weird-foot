import { Metadata } from 'next'

import Wordle from '@/components/wordle/components/Game'

export const metadata: Metadata = {
	title: 'High Potion',
	description: 'A video game podcast hosted by Steve Krothe and Hawes Burkhardt',
	openGraph: {
		title: 'High Potion Worlde',
		// description: 'A High Potion text adventure game hosted by Steve Krothe and Hawes Burkhardt',
		url: 'https://myweirdfoot.com/wordle',
		locale: 'en_US',
		type: 'website',
	},
}

export default function WordlePage() {
	return (
		<div className="flex flex-row gap-4 max-w-screen-xl mx-auto my-0 w-full flex-1 bg-black rounded-2xl border-2 border-hp2 p-4 h-full max-[420px]:p-2">
			<div className="flex flex-col items-center justify-center flex-1 w-full text-white">
				<Wordle />
			</div>
		</div>
	)
}

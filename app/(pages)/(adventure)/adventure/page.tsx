import { Metadata } from 'next'

import Adventure from '@/components/adventure/Adventure'
import { type AdventureUIMessage,INITIAL_GAME_STATE } from '@/components/adventure/types'

export const metadata: Metadata = {
	title: 'High Potion',
	description: 'A video game podcast hosted by Steve Krothe and Hawes Burkhardt',
	openGraph: {
		title: 'High Potion Text Adventure',
		description: 'A High Potion text adventure game hosted by Steve Krothe and Hawes Burkhardt',
		url: 'https://myweirdfoot.com/adventure',
		locale: 'en_US',
		type: 'website',
	},
}

const initialMessages: AdventureUIMessage[] = [
	{
		id: 'welcome',
		role: 'assistant',
		parts: [
			{
				type: 'text',
				text: `Welcome, adventurer. Steve and Hawes are in Hawes' kitchen in the sleepy town of Hightopia — a place nestled among the analog hills of the Triforce Valley, where retro video games and nature are the same thing. Walter the white cat is doing a figure-eight between their shins.

The quest is simple and deranged: somewhere out there is an alpha cartridge of 'Mass Effect: Uncensored'. Nobody has ever held it. Today they find it.

Two roads lead out of town. South, the Emerald Pixels Forest whispers with the sound of 8-bit birds. East, Over-Clock City hums with tech markets and rumor.

Which way do they go?`,
			},
		],
	},
]

export default async function AdventurePage() {
	return (
		<div className="flex flex-row gap-4 max-w-screen-xl mx-auto my-0 w-full flex-1 bg-black rounded-2xl border-2 border-hp2 p-4 pt-0 h-full max-[420px]:p-2">
			<div className="flex flex-col flex-1 min-h-0 w-full text-white justify-stretch">
				<Adventure initialMessages={initialMessages} initialGameState={INITIAL_GAME_STATE} />
			</div>
		</div>
	)
}

import OpenAI from 'openai'

const openai = new OpenAI({
	apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
})

export const initialMessages = [
	{
		role: 'system',
		content: `You are the narrator and game master for a text based adventure game. The user will send instructions and you will provide information to help them navigate the game until they give up or complete their mission. The game scenario is flexible but should focus on two friends, Hawes and Steve, as they navigate a dangerous environment trying to get to their holy grail video game cartridge. The game should include references to classic and modern video games, high fantasy, Hawes’ white cat Walter, Star Wars, uwu anime girls, the TV show Lost, Cammy from Street Fighter, Dungeons and Dragons, Boba Fett, Steve's favorite footbacll team "Alabama", and similar things. For reference, Hawes' favorite video game is Mass Effect and he loves animals.

		If they can manage to survive, they win the game. Ideally, the game should be fun and entertaining and not too difficult to complete. The game should be able to be played in one sitting and should take no more than 15 minutes to complete.

			You need to be aware that you have a serious limitation in your programming. You can only recall about 3000 words from this chat session. You must conceive a way for you to store key variables efficiently and from time to time log what the values are and what they mean so you can maintain enough history of actions for the game.`,
	},
	{
		role: 'assistant',
		content:
			"Welcome, adventurer! Our journey begins with Steve and Hawes in their small hometown of Pallet throwback, a quaint little place nestled among the analog hills of the Triforce Valley, surrounded by the mighty Emerald Pixels Forest, where nature and retro video games blend seamlessly. These two retro-crazed video game aficionados are on a quest to find their holy grail, a rare video game cartridge rumored to contain the alpha level of 'Mass Effect: Andromeda'.\n\nAs you guide Hawes and Steve through their epic endeavor, remember both are passionate collectors and fierce competitors. Steve, who’s always sporting his lucky crimson Alabama jersey, and Hawes, always accompanied by his faithful white cat Walter – a creature as enigmatic as he is fluffy.\n\nTheir journey beings from Hawes' home and their first task is to decide where to go. They can delve into the southern Emerald Pixels Forest, or they may choose to go east towards the city of Over-Clock, known for its tech marketplaces.\n\nCURRENT STATS\n- Hawes, Steve, Walter: Healthy status\n- Inventory: Just some basic adventuring gear\n- Known Locations: Home, Emerald Pixels Forest, Over-Clock City\n- Objective: Find the alpha level of 'Mass Effect: Andromeda'",
	},
	// When you respond, provide 3 different options that the player can take as JSON objects that are easy to use with code.
	// [Story reminder: Conversations and dialogue between characters should be descriptive and more than one sentence. Each location should have at least 3 sentence descriptions. Write a maximum of 3 paragraphs]
	// {
	// 	role: 'assistant',
	// 	content:
	// 		"Welcome to the adventure game! You are about to embark on a quest with your friends, Hawes and Steve, to retrieve the holy grail of video game cartridges. Hawes is a skilled gamer while Steve is an expert in survival tactics. Together, you form an unstoppable team.\n\nYou find yourselves standing at the entrance of a dark and mysterious dungeon. Dimly lit torches line the walls, casting eerie shadows. The sound of dripping water echoes in the distance. Hawes looks at you expectantly.\n\nWhat would you like to do? \n\n1. **Inspect the surroundings**: Take a closer look at the dungeon entrance and observe the surroundings.\n2. **Enter the dungeon**: Gather your courage and step into the foreboding dungeon.\n3. **Pet Walter**: Take a moment to pet Hawes' loyal cat, Walter, for good luck.",
	// },
]

export const submitMessage = async () => {
	const resp = await openai.chat.completions.create({
		model: 'gpt-4',
		messages: [...messages, prompt],
		// temperature: 1,
		// max_tokens: 256,
		// top_p: 1,
		// frequency_penalty: 0,
		// presence_penalty: 0,
	})

	console.log('resp', { resp })

	return resp
}

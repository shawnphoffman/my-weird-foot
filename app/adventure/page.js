'use client'

import './adventure.css'

import { useState } from 'react'
import OpenAI from 'openai'

// import Clear from 'components/adventure/Clear'
// import History from 'components/adventure/History'
import Input from 'components/adventure/Input'
import Loading from 'components/adventure/Loading'
import Message from 'components/adventure/Message'

// TODO Move action to a server action

const openai = new OpenAI({
	apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
	dangerouslyAllowBrowser: true,
})

const initialMessages = [
	{
		role: 'system',
		content:
			"You are the narrator and game master for a text based adventure game. The user will send instructions and you will provide information to help them navigate the game until they give up or complete their mission. The game scenario is flexible but should focus on two friends, Hawes and Steve, as they navigate a dangerous environment trying to get to their holy grail video game cartridge. The game should include references to classic and modern video games, high fantasy, Hawes’ cat Walter, Star Wars, uwu anime girls, the TV show Lost, Street Fighter, Dungeons and Dragons, Boba Fett, Alabama football, and similar things. For reference, Hawes' favorite video game is Mass Effect. If they can manage to survive, they win the game.\n\nWhen you respond, provide 3 different options that the player can take as JSON objects that are easy to use with code.",
	},
	{
		role: 'assistant',
		content:
			"Welcome to the adventure game! You are about to embark on a quest with your friends, Hawes and Steve, to retrieve the holy grail of video game cartridges. Hawes is a skilled gamer while Steve is an expert in survival tactics. Together, you form an unstoppable team.\n\nYou find yourselves standing at the entrance of a dark and mysterious dungeon. Dimly lit torches line the walls, casting eerie shadows. The sound of dripping water echoes in the distance. Hawes looks at you expectantly.\n\nWhat would you like to do? \n\n1. **Inspect the surroundings**: Take a closer look at the dungeon entrance and observe the surroundings.\n2. **Enter the dungeon**: Gather your courage and step into the foreboding dungeon.\n3. **Pet Walter**: Take a moment to pet Hawes' loyal cat, Walter, for good luck.",
	},
]
export default function Adventure() {
	const [input, setInput] = useState('')
	const [loading, setLoading] = useState(false)
	const [messages, setMessages] = useState(initialMessages)
	const [history, setHistory] = useState([])

	const handleSubmit = async () => {
		setLoading(true)
		const prompt = {
			role: 'user',
			content: input,
		}

		setMessages([...messages, prompt])

		await openai.chat.completions
			.create({
				model: 'gpt-3.5-turbo',
				messages: [...messages, prompt],
				temperature: 1,
				max_tokens: 256,
				top_p: 1,
				frequency_penalty: 0,
				presence_penalty: 0,
			})
			.then(data => {
				console.log('then', { data })
				const res = data.choices[0].message.content
				setMessages(messages => [
					...messages,
					{
						role: 'assistant',
						content: res,
					},
				])
				setHistory(history => [...history, { question: input, answer: res }])
				setInput('')
				setLoading(false)

				// TODO SCROLL TO THE BOTTOM OF .content
			})
	}

	// const clear = () => {
	// 	setMessages([initialMessages])
	// 	setHistory([])
	// }

	// TODO Handle clearing history limits

	return (
		<div className="adventure">
			<div className="column">
				{/* <h3 className="title"}>Chat Messages</h3> */}
				<div className="content">
					{messages.map((el, i) => {
						return <Message key={i} role={el.role} content={el.content} />
					})}
					{/* {loading && <Loading />} */}
				</div>
				<Input disabled={loading} value={input} onChange={e => setInput(e.target.value)} onClick={input ? handleSubmit : undefined} />
			</div>
			{/* <div className="column">
				<h3 className="Title">History</h3>
				<div className="Content">
					{history.map((el, i) => {
						return (
							<History
								key={i}
								question={el.question}
								onClick={() =>
									setMessages([
										{ role: 'user', content: history[i].question },
										{ role: 'assistant', content: history[i].answer },
									])
								}
							/>
						)
					})}
				</div>
				<Clear onClick={clear} />
			</div> */}
		</div>
	)
}

'use server'
import OpenAI from 'openai'

export const submitMessage = async (messages, prompt) => {
	'use server'

	const openai = new OpenAI({
		apiKey: process.env.OPENAI_API_KEY,
	})

	const newMessages = messages.length > 6 ? [...messages.slice(-6), prompt] : [...messages, prompt]

	const resp = await openai.chat.completions.create({
		model: 'gpt-3.5-turbo',
		messages: newMessages,
		// temperature: 1,
		// max_tokens: 256,
		// top_p: 1,
		// frequency_penalty: 0,
		// presence_penalty: 0,
	})

	console.log('resp', { resp })

	return resp
}

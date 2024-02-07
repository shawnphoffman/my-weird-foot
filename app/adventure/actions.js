'use server'
import * as Sentry from '@sentry/nextjs'
import { nanoid } from 'nanoid'
import OpenAI from 'openai'

export const submitMessage = async (messages, prompt) => {
	'use server'
	try {
		const openai = new OpenAI({
			apiKey: process.env.OPENAI_API_KEY,
		})

		Sentry.captureMessage(`prompt: ${prompt.content}`)

		const newMessages = (messages.length > 6 ? [...messages.slice(-6), prompt] : [...messages, prompt]).map(({ id, ...rest }) => rest)

		const data = await openai.chat.completions.create({
			model: 'gpt-3.5-turbo',
			messages: newMessages,
			// temperature: 1,
			// max_tokens: 256,
			// top_p: 1,
			// frequency_penalty: 0,
			// presence_penalty: 0,
		})

		if (!!data?.choices[0]) {
			const reply = data?.choices[0]?.message?.content
			if (!reply) {
				console.warn('no reply', data)
				Sentry.captureMessage(`no reply: ${prompt}`, data)
				return {
					status: 'error',
					error: 'No reply recieved. Please try again...',
				}
			} else {
				return {
					id: nanoid(),
					status: 'success',
					reply,
				}
			}
		} else {
			console.warn('no choice', data)
			Sentry.captureMessage(`no choice: ${prompt}`, data)
			return {
				status: 'error',
				error: 'No choices received. Please try again...',
			}
		}
	} catch (error) {
		Sentry.captureException(error)
		console.error('error', error.message || error)
		return {
			status: 'error',
			error: error.message || 'Something went wrong. Please try again...',
		}
	}
}

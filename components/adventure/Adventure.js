'use client'

import { useEffect, useRef, useState } from 'react'

import Input from 'components/adventure/Input'
import Loading from 'components/adventure/Loading'
import Message from 'components/adventure/Message'

export default function Adventure({ initialMessages, submitMessage }) {
	const [input, setInput] = useState('')
	const [loading, setLoading] = useState(false)
	const [messages, setMessages] = useState(initialMessages)
	// const [history, setHistory] = useState([])
	const ref = useRef(null)

	useEffect(() => {
		ref.current.scrollTo(0, Number.MAX_SAFE_INTEGER)
	}, [messages, loading])

	const handleSubmit = async () => {
		setLoading(true)
		const prompt = {
			role: 'user',
			content: input,
		}

		setMessages([...messages, prompt])
		try {
			const data = await submitMessage(messages, prompt)
			console.log('then', { data })
			if (!!data?.choices[0]) {
				const res = data?.choices[0].message.content
				setMessages(messages => [
					...messages,
					{
						role: 'assistant',
						content: res,
					},
				])
				// setHistory(history => [...history, { question: input, answer: res }])
			}
		} catch (error) {
			console.error('error', { error })
			setMessages(messages => [
				...messages,
				{
					role: 'assistant',
					content: 'Something went wrong. Please try again...',
				},
			])
		}
		setInput('')
		setLoading(false)
	}

	return (
		<div className="adventure">
			<div className="column">
				<div className="content" ref={ref}>
					{messages.map((el, i) => {
						return <Message key={i} role={el.role} content={el.content} />
					})}
					{loading && <Loading />}
				</div>
				<Input disabled={loading} value={input} onChange={e => setInput(e.target.value)} onClick={input ? handleSubmit : undefined} />
			</div>
		</div>
	)
}

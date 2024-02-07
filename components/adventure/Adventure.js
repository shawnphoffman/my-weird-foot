'use client'

import { memo, useCallback, useEffect, useRef, useState } from 'react'

import Input from 'components/adventure/Input'
import Loading from 'components/adventure/Loading'
import Message from 'components/adventure/Message'

function Adventure({ initialMessages, submitMessage }) {
	const [input, setInput] = useState('')
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	const [messages, setMessages] = useState(initialMessages)
	// const [history, setHistory] = useState([])
	const ref = useRef(null)
	const inputRef = useRef(null)

	const handleInputChange = useCallback(e => {
		// startTransition(() => {
		setInput(() => e.target.value)
		// })
	}, [])

	useEffect(() => {
		ref.current.scrollTo(0, Number.MAX_SAFE_INTEGER)
	}, [messages, loading])

	useEffect(() => {
		if (!loading && inputRef.current) {
			inputRef.current.focus()
		}
	}, [loading])

	// TODO switch this to form.submit to avoid performance issues
	const handleSubmit = useCallback(async () => {
		setLoading(true)
		const prompt = {
			role: 'user',
			content: input,
		}

		setMessages([...messages, prompt])
		try {
			const data = await submitMessage(messages, prompt)
			console.log('submitMessage.data', { data })
			if (data.status === 'success') {
				const reply = data.reply
				setMessages(messages => [
					...messages,
					{
						role: 'assistant',
						content: reply,
					},
				])
				setInput(() => '')
				// setHistory(history => [...history, { question: input, answer: res }])
			} else {
				setError(data.error || 'Something went wrong. Please try again...')
			}
		} catch (error) {
			console.error('submitMessage.catch', { error })
			setMessages(messages => [
				...messages,
				{
					role: 'assistant',
					content: 'Something went wrong. Please try again...',
				},
			])
		}
		setLoading(false)
	}, [input, messages, submitMessage])

	return (
		<>
			<div className="content" ref={ref}>
				{messages.map((el, i) => {
					return <Message key={i} role={el.role} content={el.content} />
				})}
				{error && (
					<div className="error">
						<span>Error: {error}</span>
						<button type="button" onClick={handleSubmit}>
							Try Again
						</button>
					</div>
				)}
				{loading && <Loading />}
			</div>
			<Input disabled={loading} value={input} onChange={handleInputChange} onClick={handleSubmit} passRef={inputRef} />
		</>
	)
}

export default memo(Adventure)

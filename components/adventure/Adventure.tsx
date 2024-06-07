'use client'

import { memo, useCallback, useEffect, useRef, useState } from 'react'
import * as Sentry from '@sentry/nextjs'
import { nanoid } from 'nanoid'

import Input from '@/components/adventure/Input'
import Loading from '@/components/adventure/Loading'
import Message from '@/components/adventure/Message'

const storageKey = 'hp:adventure:messages'
const isServer = typeof window === 'undefined'

function Adventure({ initialMessages, submitMessage }) {
	const [input, setInput] = useState('')
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	const [messages, setMessages] = useState(() => initialMessages)
	const ref = useRef(null)
	const inputRef = useRef(null)
	const initRef = useRef(false)

	const initialize = () => {
		if (isServer) {
			return initialMessages
		}
		initRef.current = true
		try {
			const storage = window.localStorage.getItem(storageKey)
			if (storage === null || storage === undefined) {
				return initialMessages
			}
			return storage ? JSON.parse(storage) : initialMessages
		} catch (err) {
			Sentry.captureException(err)
			return initialMessages
		}
	}

	useEffect(() => {
		setMessages(initialize())
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const handleInputChange = useCallback(e => {
		setInput(() => e.target.value)
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
		let savePrompt,
			saveResp = {}

		const prompt = {
			role: 'user',
			content: input,
		}

		savePrompt = {
			...prompt,
			id: nanoid(),
		}

		setMessages([...messages, savePrompt])
		try {
			const data = await submitMessage(messages, prompt)
			console.log('submitMessage.data', { data })
			if (data && data.status === 'success') {
				const { reply, id } = data
				saveResp = {
					role: 'assistant',
					content: reply,
					id,
				}
				setMessages(messages => [...messages, saveResp])
				setInput(() => '')
				// setHistory(history => [...history, { question: input, answer: res }])
			} else {
				setError(data?.error || 'Something went wrong. Please try again...')
			}
		} catch (error) {
			Sentry.captureException(error)
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
		window.localStorage.setItem(storageKey, JSON.stringify([...messages, savePrompt, saveResp]))
	}, [input, messages, submitMessage])

	const handleClear = useCallback(() => {
		setInput(() => '')
		setMessages(() => initialMessages)
		window.localStorage.clear(storageKey)
	}, [initialMessages])

	return (
		<>
			<div className="content" ref={ref} suppressHydrationWarning>
				{messages.map(el => {
					return <Message key={el.id} role={el.role} content={el.content} id={el.id} />
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

				<div className="clear-wrapper">
					<button type="button" className="clear" onClick={handleClear} disabled={loading} title="Clear">
						<svg
							className="svg-inline--fa"
							fill="currentColor"
							aria-hidden
							focusable="false"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
						>
							<path d="M502.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128-15.8-15.8c-15.2-15.2-38.5-18.4-57.3-8l-32.5 18L380.4 288.1l18-32.5c10.4-18.7 7.1-42.1-8-57.3l-15.8-15.8 128-128c12.5-12.5 12.5-32.8 0-45.3zM187.5 151.8L16.4 246.9C6.3 252.5 0 263.2 0 274.8c0 8.5 3.4 16.6 9.3 22.6l43.2 43.2c2.1 2.1 5.3 2.9 8.2 1.9l52.1-17.4c6.3-2.1 12.2 3.9 10.1 10.1l-17.4 52.1c-1 2.9-.2 6 1.9 8.2L214.7 502.7c6 6 14.1 9.3 22.6 9.3c11.6 0 22.3-6.3 27.9-16.4l95.1-171.1L187.5 151.8z" />
						</svg>
					</button>
				</div>
			</div>
			<Input disabled={loading} value={input} onChange={handleInputChange} onClick={handleSubmit} passRef={inputRef} />
		</>
	)
}

export default memo(Adventure)

'use client'

import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { faBroomWide } from '@awesome.me/kit-d7ccc5bb1a/icons/classic/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
	const ref = useRef<HTMLDivElement>(null)
	const inputRef = useRef<HTMLInputElement | null>(null)
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

	const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(() => e.target.value)
	}, [])

	useEffect(() => {
		ref.current!.scrollTo(0, Number.MAX_SAFE_INTEGER)
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
		window.localStorage.removeItem(storageKey)
	}, [initialMessages])

	return (
		<>
			<div className="overflow-y-scroll mb-5 whitespace-pre-wrap flex-1 max-[420px]:mb-2" ref={ref} suppressHydrationWarning>
				{messages.map(el => {
					return <Message key={el.id} role={el.role} content={el.content} id={el.id} />
				})}
				{error && (
					<div className="flex flex-col items-center justify-center gap-2 p-2 font-bold text-error">
						<span>Error: {error}</span>
						<button
							className="px-1 py-2 transition-all bg-transparent border rounded cursor-pointer border-error hover:bg-error hover:text-black"
							type="button"
							onClick={handleSubmit}
						>
							Try Again
						</button>
					</div>
				)}
				{loading && <Loading />}

				<div className="flex flex-row items-end justify-end">
					<button
						type="button"
						className="flex items-center justify-center p-2 mt-1 text-2xl font-bold border-none rounded-lg text-hp-bg bg-error hover:text-white hover:bg-error"
						onClick={handleClear}
						disabled={loading}
						title="Clear"
					>
						<FontAwesomeIcon icon={faBroomWide} />
					</button>
				</div>
			</div>
			<Input disabled={loading} value={input} onChange={handleInputChange} onClick={handleSubmit} passRef={inputRef} />
		</>
	)
}

export default memo(Adventure)

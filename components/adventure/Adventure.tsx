'use client'

import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useChat } from '@ai-sdk/react'
import { faBroomWide, faChartSimple, faXmark } from '@awesome.me/kit-d7ccc5bb1a/icons/classic/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DefaultChatTransport } from 'ai'

import GameStatePanel from '@/components/adventure/GameStatePanel'
import Input from '@/components/adventure/Input'
import Loading from '@/components/adventure/Loading'
import Message from '@/components/adventure/Message'
import type { AdventureUIMessage, GameState } from '@/components/adventure/types'

const storageKey = 'hp:adventure:v2:messages'

function deriveLatestGameState(messages: AdventureUIMessage[], fallback: GameState): GameState {
	for (let i = messages.length - 1; i >= 0; i--) {
		const msg = messages[i]
		if (msg.role !== 'assistant') continue
		for (let j = msg.parts.length - 1; j >= 0; j--) {
			const part = msg.parts[j]
			if (part.type === 'tool-updateGameState' && (part.state === 'input-available' || part.state === 'output-available')) {
				return part.input as GameState
			}
		}
	}
	return fallback
}

function Adventure({
	initialMessages,
	initialGameState,
}: {
	initialMessages: AdventureUIMessage[]
	initialGameState: GameState
}) {
	const [input, setInput] = useState('')
	const scrollRef = useRef<HTMLDivElement>(null)
	const inputRef = useRef<HTMLInputElement | null>(null)
	const dialogRef = useRef<HTMLDialogElement>(null)
	const hydrated = useRef(false)

	const { messages, sendMessage, status, error, stop, regenerate, setMessages } = useChat<AdventureUIMessage>({
		transport: new DefaultChatTransport({ api: '/api/adventure' }),
		messages: initialMessages,
		onError: err => console.error(err),
	})

	useEffect(() => {
		if (hydrated.current) return
		hydrated.current = true
		try {
			const raw = window.localStorage.getItem(storageKey)
			if (raw) {
				const saved = JSON.parse(raw) as AdventureUIMessage[]
				if (Array.isArray(saved) && saved.length > 0) {
					setMessages(saved)
				}
			}
		} catch (err) {
			console.error(err)
		}
	}, [setMessages])

	useEffect(() => {
		if (!hydrated.current) return
		if (status !== 'ready') return
		try {
			window.localStorage.setItem(storageKey, JSON.stringify(messages))
		} catch (err) {
			console.error(err)
		}
	}, [messages, status])

	useEffect(() => {
		scrollRef.current?.scrollTo(0, Number.MAX_SAFE_INTEGER)
	}, [messages, status])

	useEffect(() => {
		if (status === 'ready' && inputRef.current) {
			inputRef.current.focus()
		}
	}, [status])

	const gameState = useMemo(() => deriveLatestGameState(messages, initialGameState), [messages, initialGameState])

	const isBusy = status === 'submitted' || status === 'streaming'
	const isGameOver = gameState.gameOver !== null

	const handleSubmit = useCallback(() => {
		const text = input.trim()
		if (!text || isBusy || isGameOver) return
		sendMessage({ text })
		setInput('')
	}, [input, isBusy, isGameOver, sendMessage])

	const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value)
	}, [])

	const handleClear = useCallback(() => {
		setInput('')
		setMessages(initialMessages)
		try {
			window.localStorage.removeItem(storageKey)
		} catch (err) {
			console.error(err)
		}
	}, [initialMessages, setMessages])

	const openStats = useCallback(() => dialogRef.current?.showModal(), [])
	const closeStats = useCallback(() => dialogRef.current?.close(), [])
	const onDialogClick = useCallback((e: React.MouseEvent<HTMLDialogElement>) => {
		if (e.target === e.currentTarget) dialogRef.current?.close()
	}, [])

	return (
		<div className="flex flex-col md:flex-row gap-4 flex-1 min-h-0 w-full">
			<div className="flex flex-col flex-1 min-w-0 min-h-0 text-white justify-stretch">
				<div
					className="overflow-y-scroll whitespace-pre-wrap flex-1 min-h-0"
					ref={scrollRef}
					suppressHydrationWarning
				>
					{messages.map(message => (
						<Message key={message.id} message={message} />
					))}

					{error && (
						<div className="flex flex-col items-center justify-center gap-2 p-2 font-bold text-error">
							<span>Error: {error.message || 'Something went wrong.'}</span>
							<button
								className="px-1 py-2 transition-all bg-transparent border rounded cursor-pointer border-error hover:bg-error hover:text-black"
								type="button"
								onClick={() => regenerate()}
							>
								Try Again
							</button>
						</div>
					)}

					{status === 'submitted' && <Loading />}
				</div>
				<div className="flex flex-row items-end justify-end gap-2 mt-2 mb-2">
					{isBusy && (
						<button
							type="button"
							className="flex items-center justify-center px-3 h-9 text-sm font-bold border rounded-lg text-hp3 border-hp3 hover:bg-hp3 hover:text-black"
							onClick={() => stop()}
						>
							Stop
						</button>
					)}
					<button
						type="button"
						className="md:hidden flex items-center justify-center gap-2 px-3 h-9 text-sm font-bold border-none rounded-lg text-hp-bg bg-hp3 hover:bg-hp4"
						onClick={openStats}
						title="Show stats"
					>
						<FontAwesomeIcon icon={faChartSimple} />
						{gameState.turn}
					</button>
					<button
						type="button"
						className="flex items-center justify-center px-3 h-9 text-sm font-bold border-none rounded-lg text-hp-bg bg-error hover:text-white hover:bg-error"
						onClick={handleClear}
						disabled={isBusy}
						title="Clear"
						aria-label="Clear"
					>
						<FontAwesomeIcon icon={faBroomWide} />
					</button>
				</div>
				<Input
					disabled={isBusy || isGameOver}
					value={input}
					onChange={handleInputChange}
					onClick={handleSubmit}
					passRef={inputRef}
				/>
			</div>
			<div className="hidden md:block md:shrink-0 md:mt-4">
				<GameStatePanel state={gameState} />
			</div>
			<dialog
				ref={dialogRef}
				onClick={onDialogClick}
				className="bg-transparent p-3 max-w-sm w-[92vw] overflow-visible backdrop:bg-black/80 backdrop:backdrop-blur-sm"
			>
				<div className="relative">
					<button
						type="button"
						onClick={closeStats}
						className="absolute z-10 flex items-center justify-center w-9 h-9 text-white border-2 rounded-full -top-3 -right-3 border-hp3 bg-black shadow-lg hover:bg-hp1/80"
						aria-label="Close stats"
					>
						<FontAwesomeIcon icon={faXmark} />
					</button>
					<GameStatePanel state={gameState} />
				</div>
			</dialog>
		</div>
	)
}

export default memo(Adventure)

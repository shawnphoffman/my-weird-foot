import classNames from 'classnames'

import type { AdventureUIMessage } from '@/components/adventure/types'

const asciiBlock = /```ascii\n([\s\S]*?)```/g

function renderTextWithAscii(text: string) {
	const segments: Array<{ kind: 'text' | 'ascii'; value: string }> = []
	let lastIndex = 0
	let match: RegExpExecArray | null

	asciiBlock.lastIndex = 0
	while ((match = asciiBlock.exec(text)) !== null) {
		if (match.index > lastIndex) {
			segments.push({ kind: 'text', value: text.slice(lastIndex, match.index) })
		}
		segments.push({ kind: 'ascii', value: match[1].replace(/\n$/, '') })
		lastIndex = match.index + match[0].length
	}
	if (lastIndex < text.length) {
		segments.push({ kind: 'text', value: text.slice(lastIndex) })
	}
	if (segments.length === 0) {
		segments.push({ kind: 'text', value: text })
	}

	return segments.map((segment, i) =>
		segment.kind === 'ascii' ? (
			<pre
				key={i}
				className="my-2 p-3 bg-black/60 border border-hp3 rounded-lg text-hp3 text-xs leading-tight overflow-x-auto font-mono whitespace-pre"
			>
				{segment.value}
			</pre>
		) : (
			<span key={i}>{segment.value}</span>
		)
	)
}

function Message({ message }: { message: AdventureUIMessage }) {
	if (message.role === 'system') return null

	const isAssistant = message.role === 'assistant'
	const classes = classNames(isAssistant ? 'text-hp3' : 'text-hp4 italic')

	const textParts = message.parts.filter((p): p is Extract<typeof p, { type: 'text' }> => p.type === 'text')
	if (textParts.length === 0) return null

	return (
		<div className={`pb-4 border-b border-hp2 text-base font-bold pt-4 ${classes}`} data-id={message.id}>
			{!isAssistant && <div>You: </div>}
			{textParts.map((part, i) => (
				<div key={i}>{renderTextWithAscii(part.text)}</div>
			))}
		</div>
	)
}

export default Message

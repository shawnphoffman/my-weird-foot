import { memo } from 'react'

function Message({ role, content }) {
	if (role === 'system') return null

	const isAssistant = role === 'assistant'

	return (
		<div className={`message ${isAssistant ? 'ai' : 'user'}`}>
			<div>{isAssistant ? content : `You: ${content}`}</div>
		</div>
	)
}

export default memo(Message)

import { memo } from 'react'

function Message({ role, content, id }) {
	if (role === 'system') return null

	const isAssistant = role === 'assistant'

	return (
		<div className={`message ${isAssistant ? 'ai' : 'user'}`} data-id={id}>
			<div>{isAssistant ? content : `You: ${content}`}</div>
		</div>
	)
}

export default memo(Message)

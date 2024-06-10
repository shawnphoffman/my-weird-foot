import classNames from 'classnames'

function Message({ role, content, id }) {
	if (role === 'system') return null

	const isAssistant = role === 'assistant'

	const classes = classNames(isAssistant ? 'text-hp3' : 'text-hp4 italic')

	return (
		<div className={`pb-4 border-b border-hp2 text-lg font-bold pt-4 ${classes}`} data-id={id}>
			<div>{isAssistant ? content : `You: ${content}`}</div>
		</div>
	)
}

export default Message

export default function Message({ role, content }) {
	if (role === 'system') return null
	return (
		<div className={`message ${role === 'assistant' && 'ai'}`}>
			{/* <div>{role}</div> */}
			<div>{content}</div>
		</div>
	)
}

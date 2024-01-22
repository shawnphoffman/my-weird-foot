export default function History({ question, onClick }) {
	return (
		<div className="history-wrapper" onClick={onClick}>
			<p>{question.substring(0, 15)}...</p>
		</div>
	)
}

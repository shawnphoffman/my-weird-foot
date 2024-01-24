export default function Input({ value, onChange, onClick, disabled }) {
	const handleKeyDown = e => {
		if (e.key === 'Enter') {
			onClick()
		}
	}
	return (
		<div className="input wrapper">
			<input
				className="input text"
				disabled={disabled}
				placeholder={disabled ? 'Loading...' : 'Enter your next step...'}
				value={value}
				onChange={onChange}
				onKeyDown={handleKeyDown}
				autoFocus={true}
			/>
			<button className="input btn" onClick={onClick} disabled={disabled}>
				<i className="fa-solid fa-turn-down-left" aria-hidden />
				Enter
			</button>
		</div>
	)
}

'use client'

export default function Input({ value, onChange, onClick, disabled, passRef }) {
	const handleKeyDown = e => {
		if (e.key === 'Enter' && value.length > 0) {
			onClick()
		}
	}
	return (
		<div className="input wrapper">
			<input
				ref={passRef}
				className="input text"
				disabled={disabled}
				placeholder={disabled ? 'Loading...' : 'Enter your next step...'}
				value={value}
				onChange={onChange}
				onKeyDown={handleKeyDown}
				autoFocus={true}
				maxLength={75}
			/>
			<button type="button" className="input btn" onClick={onClick} disabled={disabled}>
				<svg className="svg-inline--fa" aria-hidden focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
					<path
						fill="currentColor"
						d="M177.5 446c-8.8 3.8-19 2-26-4.6l-144-136C2.7 300.9 0 294.6 0 288s2.7-12.9 7.5-17.4l144-136c7-6.6 17.2-8.4 26-4.6s14.5 12.5 14.5 22l0 88 192 0c17.7 0 32-14.3 32-32l0-144c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 144c0 70.7-57.3 128-128 128l-192 0 0 88c0 9.6-5.7 18.2-14.5 22z"
					></path>
				</svg>
				Enter
			</button>
		</div>
	)
}

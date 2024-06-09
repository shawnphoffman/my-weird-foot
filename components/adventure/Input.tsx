'use client'

import { faTurnDownLeft } from '@awesome.me/kit-d7ccc5bb1a/icons/classic/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
				<FontAwesomeIcon icon={faTurnDownLeft} />
				Enter
			</button>
		</div>
	)
}

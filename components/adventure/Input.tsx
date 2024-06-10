'use client'

import { faTurnDownLeft } from '@awesome.me/kit-d7ccc5bb1a/icons/classic/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Input({ value, onChange, onClick, disabled, passRef }) {
	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' && value.length > 0) {
			onClick()
		}
	}

	return (
		<div className="flex flex-row justify-stretch h-16 rounded-2xl bg-black border-2 border-dashed border-hp3 overflow-hidden max-[420px]:h-12">
			<input
				ref={passRef}
				className="border-none outline-none bg-transparent p-4 text-white flex-1 font-bold text-2xl caret-hp4 w-full max-[420px]:font-base max-[420px]:p-2"
				disabled={disabled}
				placeholder={disabled ? 'Loading...' : 'Enter your next step...'}
				value={value}
				onChange={onChange}
				onKeyDown={handleKeyDown}
				autoFocus={true}
				maxLength={75}
			/>
			<button
				type="button"
				className="text-hp-bg border-none p-4 text-base font-bold bg-hp3 flex items-center justify-center gap-1 max-[420px]:h-12 max-[420px]:p-2 hover:cursor-pointer hover:bg-hp4"
				onClick={onClick}
				disabled={disabled}
			>
				<FontAwesomeIcon icon={faTurnDownLeft} />
				Enter
			</button>
		</div>
	)
}

import { useEffect, useState } from 'react'
import { faDeleteLeft } from '@awesome.me/kit-d7ccc5bb1a/icons/classic/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const keyboard = {
	line1: 'QWERTYUIOP',
	line2: 'ASDFGHJKL',
	line3: 'ZXCVBNM',
}

let defaultLetters = []

'abcdefjhijklmnopqrstuvwxyz'.split('').forEach(i => {
	defaultLetters[i] = ''
})

function Key(props) {
	const [state, setState] = useState('bg-gray-200 hover:bg-gray-300 dark:bg-zinc-400 dark:text-white dark:hover:bg-zinc-500')

	const x = props.value.length === 1 ? 'w-7 sm:w-10 ' : 'p-2 sm:p-4 '
	const returnKey = () => {
		props.getKey(props.value)
	}

	useEffect(() => {
		setTimeout(() => {
			if (props.state === 'C') setState('bg-lime-700 text-white')
			if (props.state === 'E') setState('bg-yellow-700 text-white')
			if (props.state === 'N') setState('bg-zinc-700 text-white dark:bg-gray-600')
		}, 350)
	}, [props.state])

	return (
		<button className={x + state + ' h-14 300 grid items-center rounded font-semibold cursor-pointer'} onClick={returnKey}>
			{/* {props.value === "DEL" ? <BackspaceIcon /> : props.value} */}
			{props.value === 'DEL' ? <FontAwesomeIcon icon={faDeleteLeft} /> : props.value}
		</button>
	)
}

function KeyBoard(props) {
	const [letters, setletters] = useState(defaultLetters)
	useEffect(() => {
		setletters(props.letters)
	}, [props.changed])

	const keyHandler = value => {
		props.keyHandler(value)
	}
	return (
		<div className="flex flex-col items-center pb-5 w-100">
			<div className="flex gap-1 my-0.5 w-fit">
				{keyboard.line1.split('').map((value, key) => (
					<Key getKey={keyHandler} value={value} key={key} state={letters[value]} />
				))}
			</div>
			<div className="flex gap-1 my-0.5 w-fit">
				{keyboard.line2.split('').map((value, key) => (
					<Key getKey={keyHandler} value={value} key={key} state={letters[value]} />
				))}
			</div>
			<div className="flex gap-1 my-0.5 w-fit">
				<Key value="ENTER" getKey={keyHandler} />
				{keyboard.line3.split('').map((value, key) => (
					<Key getKey={keyHandler} value={value} key={key} state={letters[value]} />
				))}
				<Key value="DEL" getKey={keyHandler} />
			</div>
		</div>
	)
}

export default KeyBoard

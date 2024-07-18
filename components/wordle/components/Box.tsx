import { useEffect, useState } from 'react'
import { faDeleteLeft } from '@awesome.me/kit-d7ccc5bb1a/icons/classic/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Box(props) {
	const [state, setState] = useState('text-black border-2 border-gray-300 dark:bg-zinc-800 dark:text-white rounded')

	useEffect(() => {
		setTimeout(() => {
			if (props.state === 'C') setState('bg-lime-700 text-white')
			if (props.state === 'E') setState('bg-yellow-700 text-white')
			if (props.state === 'N') setState('bg-zinc-700 text-white')
		}, 125 * props.pos)
	}, [props.pos, props.state])

	return (
		<div className={'h-12 w-12 sm:w-14 sm:h-14 grid place-items-center p-0 m-0 font-bold text-2xl rounded-sm ' + state}>
			{props.value === 'DEL' ? <FontAwesomeIcon icon={faDeleteLeft} /> : props.value}
		</div>
	)
}

export default Box

import { faCircleQuestion } from '@awesome.me/kit-d7ccc5bb1a/icons/classic/solid'
import { faHighPotionBalls } from '@awesome.me/kit-d7ccc5bb1a/icons/kit/custom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavBar({ help }) {
	return (
		<div className="flex items-center justify-between py-3 pt-5 text-black navbar w-100 sm:pt-3 dark:text-white">
			<FontAwesomeIcon
				icon={faCircleQuestion}
				onClick={() => {
					help(true)
				}}
			/>
			<h1 className="text-3xl font-bold tracking-wider">WORDLE</h1>

			<FontAwesomeIcon icon={faHighPotionBalls} />
		</div>
	)
}

export default NavBar

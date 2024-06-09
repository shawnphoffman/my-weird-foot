import { faHighPotionBalls } from '@awesome.me/kit-d7ccc5bb1a/icons/kit/custom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Loading() {
	return (
		<div className="text-4xl text-hp4">
			<FontAwesomeIcon icon={faHighPotionBalls} beatFade />
		</div>
	)
}

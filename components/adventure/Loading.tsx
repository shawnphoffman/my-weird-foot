import { faSlash } from '@awesome.me/kit-d7ccc5bb1a/icons/classic/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Loading() {
	return (
		<div className="flex items-center justify-center h-12">
			<FontAwesomeIcon icon={faSlash} spinPulse />
		</div>
	)
}

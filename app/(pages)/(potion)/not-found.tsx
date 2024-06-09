import { faArrowRight } from '@awesome.me/kit-d7ccc5bb1a/icons/classic/solid'
import { faHighPotionBalls } from '@awesome.me/kit-d7ccc5bb1a/icons/kit/custom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center w-full max-w-lg gap-4 p-4 px-8 mx-auto mb-8 text-left text-white rounded-xl bg-black/50 ">
			<div className="flex flex-col w-full gap-2">
				<h1 className="text-6xl font-bold text-hp4">Uh oh...</h1>
				<h2 className="text-xl text-white">These aren&apos;t the droids you&apos;re looking for...</h2>
				<Link
					href="/home"
					className="flex flex-row items-center justify-center gap-2 text-2xl font-bold w-fit text-hp3 decoration-hp4 decoration-dashed hover:underline underline-offset-2"
				>
					<span className="link">Return to safety</span>
					<FontAwesomeIcon icon={faArrowRight} />
				</Link>
			</div>
			<div className="text-error animate-pulse text-[8rem] sm:text-[10rem] flex flex-row gap-4 justify-center flex-wrap">
				<FontAwesomeIcon icon={faHighPotionBalls} />
			</div>
		</div>
	)
}

import { faArrowRight } from '@awesome.me/kit-d7ccc5bb1a/icons/classic/solid'
import { faBlueHarvest } from '@awesome.me/kit-d7ccc5bb1a/icons/kit/custom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center gap-4 mx-auto text-left text-white w-full max-w-lg p-4 px-8 mb-8  border-4 rounded-xl border-boba-border bg-black/50 ">
			<div className="flex flex-col w-full gap-2">
				<h1 className="text-6xl font-bold text-boba-gold">Uh oh...</h1>
				<h2 className="text-xl text-white/80">These aren&apos;t the droids you&apos;re looking for...</h2>
				<Link
					href="/"
					className="flex flex-row items-center justify-center gap-2 text-2xl font-bold w-fit text-boba-green decoration-boba-grayn decoration-2 hover:underline underline-offset-2"
				>
					<span className="link">Return to safety</span>
					<FontAwesomeIcon icon={faArrowRight} />
				</Link>
			</div>
			<div className="text-boba-grayn animate-pulse text-[8rem] sm:text-[20rem] flex flex-row gap-4 justify-center flex-wrap">
				<FontAwesomeIcon icon={faBlueHarvest} />
			</div>
		</div>
	)
}

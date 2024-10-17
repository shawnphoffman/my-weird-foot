import { getAppleReviews } from '@/app/data/actions'

import Stars from './Stars'

type Review = {
	title: string
	author: string
	stars: string
	text: string
}

export default async function Reviews() {
	const { reviews } = await getAppleReviews()

	if (!reviews) return null

	const filteredReviews = reviews.reduce((memo, acc) => {
		if (acc.stars !== 5 && !!process.env.VERCEL_URL) {
			return memo
		}
		memo.push(acc)
		return memo
	}, [])

	if (!filteredReviews || !filteredReviews.length) return null

	return (
		<div className="flex flex-col items-center justify-center w-full gap-2">
			<div className="text-2xl font-bold ">Recent Reviews</div>
			<div className="rounded-xl bg-black/50">
				{filteredReviews.map((r: Review) => (
					<div key={r.title} className="p-2 my-2">
						<div className="flex flex-col justify-start gap-2 text-left rounded-lg">
							<div className="flex flex-row items-center justify-between">
								<div className="flex flex-col items-start gap-1 sm:gap-4 sm:flex-row sm:items-center">
									<div className="font-bold text-hp2">{`"${r.title}"`}</div>
									<div className="text-xs italic text-hp3">{r.author}</div>
								</div>
								<Stars count={r.stars} />
							</div>
							<div className="text-xs leading-normal sm:pl-2">{r.text}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

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
		if (acc.stars !== '5' && !!process.env.VERCEL_URL) {
			return memo
		}
		memo.push(acc)
		return memo
	}, [])

	if (!filteredReviews || !filteredReviews.length) return null

	return (
		<div className="flex flex-col items-center justify-center w-full gap-2">
			<div className="text-3xl font-bold ">Recent Reviews</div>
			<div className="border-4 divide-y-2 rounded-xl border-boba-border bg-black/50 divide-boba-border">
				{filteredReviews.map((r: Review) => (
					<div key={r.title} className="p-2 m-2">
						<div className="flex flex-col justify-start gap-2 text-left rounded-lg">
							<div className="flex flex-row items-center justify-between">
								<div className="flex flex-col items-start gap-1 sm:gap-4 sm:flex-row sm:items-center">
									<div className="font-bold text-boba-green">{`"${r.title}"`}</div>
									<div className="text-sm italic text-boba-grayn">{r.author}</div>
								</div>
								<Stars count={r.stars} />
							</div>
							<div className="text-sm leading-normal sm:pl-2">{r.text}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

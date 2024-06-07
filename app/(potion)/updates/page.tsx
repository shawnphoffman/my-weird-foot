import PostRow from '@/components/updates/PostRow'
import { getAllPosts } from '@/sanity/sanity.requests'
import { POST_QUERYResult } from '@/sanity/sanity.types'

export default async function UpdatesPage() {
	const posts = await getAllPosts()

	return (
		<div className="w-full max-w-screen-lg rounded-xl bg-black/50">
			<div className="flex flex-col justify-center w-full p-2 divide-y divide-hp3">
				{posts.length === 0 && <div className="my-4 text-xl font-bold text-center text-white">No posts found</div>}
				{posts.map(post => {
					return <PostRow key={post._id} post={post as NonNullable<POST_QUERYResult>} />
				})}
			</div>
		</div>
	)
}

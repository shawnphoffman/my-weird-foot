import PostRow from '@/components/updates/PostRow'
import { getAllPosts } from '@/sanity/sanity.requests'
import { POST_QUERYResult } from '@/sanity/sanity.types'

export default async function UpdatesPage() {
	const posts = await getAllPosts()

	return (
		<div className="w-full max-w-screen-lg border-4 rounded-xl border-boba-border bg-black/50">
			<div className="flex flex-col justify-center w-full p-2 divide-y-2 divide-boba-border border-t-boba-border">
				{posts.length === 0 && <div className="text-center font-bold my-4 text-xl text-boba-green">No posts found</div>}
				{posts.map(post => {
					return <PostRow key={post._id} post={post as NonNullable<POST_QUERYResult>} />
				})}
			</div>
		</div>
	)
}

import { Suspense } from 'react'
import { PortableText, type PortableTextReactComponents } from '@portabletext/react'

import PostImage from './portableText/PostImage'
import UrlEmbed from './portableText/UrlEmbed'
import YoutubeEmbed from './portableText/YoutubeEmbed'
import styles from './PostBody.module.css'

const myPortableTextComponents: Partial<PortableTextReactComponents> = {
	marks: {
		textRed: ({ children }) => {
			return <span className="text-red-500">{children}</span>
		},
		textBlue: ({ children }) => {
			return <span className="text-sky-500">{children}</span>
		},
		textGreen: ({ children }) => {
			return <span className="text-hp2">{children}</span>
		},
		underline: ({ children }) => {
			return <span className="underline underline-offset-2 decoration-hp4">{children}</span>
		},
		'strike-through': ({ children }) => {
			return <span className="line-through decoration-hp1 decoration-2">{children}</span>
		},
	},
	types: {
		image: ({ value }) => {
			return <PostImage {...value} />
		},
		embed: ({ value }) => {
			return <UrlEmbed {...value} />
		},
		youtube: ({ value }) => {
			const { url } = value
			const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|.+?&v=))([^?&]+)/)
			const videoId = match ? match[1] : null
			return <YoutubeEmbed videoId={videoId} />
		},
		gallery: ({ value }) => {
			return (
				<div className="grid items-center justify-center grid-cols-2 gap-4 md:grid-cols-3">
					{value.images.map(i => (
						<Suspense key={i._key}>
							<PostImage className="h-auto max-w-full rounded-lg" {...i} />
						</Suspense>
					))}
				</div>
			)
		},
	},
}

// const onMissingComponent = (type: any) => {
// 	console.error('Missing component:', type)
// 	return null
// }

export default function PostBody({ content }) {
	return (
		<div className={`mx-auto max-w-3xl ${styles.portableText}`}>
			<PortableText value={content} components={myPortableTextComponents} />
		</div>
	)
}

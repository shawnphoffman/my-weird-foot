'use client'

import { spotifyId } from '@/app/data/links'

export default function ListenNow({}) {
	return (
		<div className="w-full max-w-2xl mx-auto text-base leading-normal border-4 sm:text-lg rounded-2xl border-hp2">
			<iframe
				src={`https://open.spotify.com/embed/show/${spotifyId}`}
				width="100%"
				height="352"
				allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
				sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
				loading="lazy"
			></iframe>
		</div>
	)
}

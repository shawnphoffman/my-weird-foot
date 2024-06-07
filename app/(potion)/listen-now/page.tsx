'use client'

import { spotifyId } from '../home/links'

export default function ListenNow({}) {
	return (
		<div className={'pageDescription'}>
			<iframe
				className="iframe"
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

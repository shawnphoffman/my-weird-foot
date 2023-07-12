import { memo } from 'react'

import styles from '../HighPotion.module.css'

const ListenNow = ({}) => {
	return (
		<div className={styles.pageDescription}>
			<iframe
				className={styles.iframe}
				src="https://open.spotify.com/embed/show/3Di7qFLy6FoNg6zcBGaOnK"
				width="100%"
				height="352"
				frameborder="0"
				allowfullscreen=""
				allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
				sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
				loading="lazy"
			></iframe>
		</div>
	)
}

export default memo(ListenNow)

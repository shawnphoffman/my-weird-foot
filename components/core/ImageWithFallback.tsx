'use client'

import { ErrorBoundary } from 'react-error-boundary'
import Image from 'next/image'

const ImageWithFallback = ({ alt, src, ...props }) => {
	return (
		// eslint-disable-next-line @next/next/no-img-element
		<ErrorBoundary fallback={<img alt={alt} src={src as string} {...props} />}>
			<Image alt={alt} src={src} {...props} />
		</ErrorBoundary>
	)
}

export default ImageWithFallback

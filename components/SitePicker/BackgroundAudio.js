'use client'

import { memo, useEffect, useRef } from 'react'

const BackgroundAudio = () => {
	const audioSrc = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/02.%20Player%20Select.mp3'
	const audioRef = useRef()

	useEffect(() => {
		audioRef.current = new Audio(audioSrc)
		const current = audioRef.current
		current.play().catch(() => {
			document.addEventListener(
				'click',
				() => {
					current.play()
				},
				{ once: true }
			)
		})

		return () => {
			current.pause()
		}
	}, [])

	return null
}

export default memo(BackgroundAudio)

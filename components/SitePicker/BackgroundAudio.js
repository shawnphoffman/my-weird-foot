'use client'

import { memo, useCallback, useEffect, useRef } from 'react'

const BackgroundAudio = () => {
	const audioSrc = '/playerSelect.mp3'
	const audioRef = useRef()

	const onClick = useCallback(() => {
		const current = audioRef.current
		current.play()
	}, [])

	useEffect(() => {
		audioRef.current = new Audio(audioSrc)
		const current = audioRef.current
		current.play().catch(() => {
			document.addEventListener('click', onClick, { once: true })
		})

		return () => {
			document.removeEventListener('click', onClick)
			current.pause()
		}
	}, [onClick])

	return null
}

export default memo(BackgroundAudio)

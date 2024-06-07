'use client'

import { useCallback, useEffect, useRef } from 'react'

export default function BackgroundAudio() {
	const audioSrc = '/playerSelect.mp3'
	const audioRef = useRef<HTMLAudioElement | undefined>()

	const onClick = useCallback(() => {
		audioRef.current?.play()
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

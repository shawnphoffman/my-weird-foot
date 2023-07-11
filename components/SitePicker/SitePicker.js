'use client'

import './sf.css'

import { memo, useCallback, useEffect, useLayoutEffect, useState } from 'react'

import Character from './Character'
import characterArray from './characterList'
import GoButton from './GoButton'

const SitePicker = () => {
	const [selectedIndex, setSelectedIndex] = useState()

	const handleClick = useCallback(id => {
		setSelectedIndex(id)
	}, [])

	const onKeyDown = useCallback(
		event => {
			if ([37, 39].includes(event.keyCode)) {
				event.preventDefault()
				setSelectedIndex(selectedIndex === 1 ? 2 : 1)
				return
			}
			if (event.key === 'Enter' && !!selectedIndex) {
				window.location = selectedIndex === 1 ? 'https://blueharvest.rocks' : '/home'
			}
		},
		[selectedIndex]
	)

	useEffect(() => {
		document.addEventListener('keydown', onKeyDown)
		return () => {
			document.removeEventListener('keydown', onKeyDown)
		}
	}, [onKeyDown])

	useLayoutEffect(() => {
		if (!selectedIndex) return
		const selectedCharacter = Object.values(characterArray)[selectedIndex]
		console.log(selectedCharacter)
		document.documentElement.className = selectedCharacter.id
	}, [selectedIndex])

	return (
		<div className="container">
			<div className="character-wrapper">
				{Object.keys(characterArray).map((k, i) => {
					const c = characterArray[k]
					return (
						<Character
							key={c.id}
							id={c.id}
							name={c.name}
							image={c.imgSrc}
							selected={selectedIndex === i}
							disabled={c.disabled}
							onClick={() => !c.disabled && handleClick(i)}
						/>
					)
				})}
			</div>
			<GoButton i={selectedIndex} />
		</div>
	)
}

export default memo(SitePicker)

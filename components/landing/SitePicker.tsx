'use client'

import { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import BackgroundAudio from './BackgroundAudio'
import Character from './Character'
import characterArray from './characterList'
import GoButton from './GoButton'

const linkBlueHarvest = 'https://blueharvest.rocks'
const linkHighPotion = `/home`

export default function SitePicker() {
	const [selectedIndex, setSelectedIndex] = useState<number | undefined>()
	const router = useRouter()

	const handleClick = useCallback(
		id => {
			if (selectedIndex === id) {
				router.push(selectedIndex === 1 ? linkBlueHarvest : linkHighPotion)
			} else {
				setSelectedIndex(id)
			}
		},
		[router, selectedIndex]
	)

	const onKeyDown = useCallback(
		event => {
			if ([37, 39].includes(event.keyCode)) {
				event.preventDefault()
				setSelectedIndex(selectedIndex === 1 ? 2 : 1)
				return
			}
			if (event.key === 'Enter' && !!selectedIndex) {
				router.push(selectedIndex === 1 ? linkBlueHarvest : linkHighPotion)
			}
		},
		[router, selectedIndex]
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
		document.documentElement.className = selectedCharacter.id
	}, [selectedIndex])

	return (
		<div className="flex flex-col justify-center w-full h-full">
			<div className="flex my-4 mx-auto flex-wrap justify-center bg-neutral-400 select-none max-w-[818px] max-[300px]:max-w-[150px] max-[600px]:max-w-[300px] max-[848px]:max-w-[602px] max-[848px]:bg-none">
				{Object.keys(characterArray).map((k, i) => {
					const c = characterArray[k]
					return (
						<Character
							key={c.id}
							id={c.id}
							image={c.imgSrc}
							selected={selectedIndex === i}
							disabled={c.disabled}
							onClick={() => !c.disabled && handleClick(i)}
						/>
					)
				})}
			</div>
			<GoButton i={selectedIndex} />
			<BackgroundAudio />
		</div>
	)
}

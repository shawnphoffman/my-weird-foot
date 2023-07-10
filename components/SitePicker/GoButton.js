import { memo, useMemo } from 'react'
import { styled } from 'linaria/react'

const Button = styled.a`
	background-color: purple;
	padding: 1em 2em;
	font-size: 24px;
	font-weight: bold;
	border-radius: 12px;
	border: 2px solid white;
`

const Container = styled.div`
	display: flex;
	justify-content: center;
`

const GoButton = ({ i }) => {
	const destination = useMemo(() => {
		if (!i) return null

		return i === 1
			? {
					href: 'https://blueharvest.rocks',
					title: 'Blue Harvest',
			  }
			: {
					href: '/home',
					title: 'High Potion',
			  }
	}, [i])

	if (!i) return null

	return (
		<Container>
			<Button href={destination.href}>Visit {destination.title}</Button>
		</Container>
	)
}

export default memo(GoButton)

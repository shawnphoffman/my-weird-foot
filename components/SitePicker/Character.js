import { memo } from 'react'
import Image from 'next/image'

const Character = ({ id, name, image, selected, disabled, ...rest }) => {
	return (
		<div className={`character ${!!selected && 'active'} ${!!disabled && 'disabled'}`} data-name={id} rel={name} {...rest}>
			<Image src={image} alt={name} width={200} height={200} draggable="false" />
		</div>
	)
}

export default memo(Character)

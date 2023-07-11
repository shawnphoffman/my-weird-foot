import { memo } from 'react'
import Image from 'next/image'

const Character = ({ id, name, image, selected, disabled, ...rest }) => {
	return (
		<a className={`character ${!!selected && 'active'} ${!!disabled && 'disabled'}`} data-name={id} rel={name} {...rest}>
			{/* <Image className="character__img" src={image} alt={name} width={169} height={200} /> */}
			<Image className="character__img" src={image} alt={name} width={200} height={200} draggable="false" />
			{/* <p className="character__name">{name}</p> */}
		</a>
	)
}

export default memo(Character)

import Image from 'next/image'

export default function Character({ id, name, image, selected, disabled, ...rest }) {
	return (
		<div className={`character ${!!selected && 'active'} ${!!disabled && 'disabled'}`} data-name={id} rel={name} {...rest}>
			<Image src={image} alt={name} width={200} height={200} draggable="false" />
		</div>
	)
}

import classNames from 'classnames'
import Image from 'next/image'

export default function Character({ id, image, selected, disabled, ...rest }) {
	const enabledClasses = 'cursor-pointer hover:border-2 hover:border-white grayscale-[0.2]'
	const disabledClasses = 'hover:border-none grayscale cursor-default'
	const active = 'hover:border-none scale-[1.15] !grayscale-0 active'

	const classes = classNames(disabled ? disabledClasses : enabledClasses, selected && active)

	return (
		<div
			className={`max-[848px]:h-[150px] max-[848px]:w-[150px] max-[848px]:border-2 border-neutral-400 h-[204px] w-[204px] flex justify-center items-center ${classes}`}
			data-name={id}
			{...rest}
		>
			<Image src={image} alt="" width={200} height={200} draggable="false" className="" />
		</div>
	)
}

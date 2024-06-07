// import './Background.css'

import Image from 'next/image'

import bg from '@/app/images/raccoon.png'

export default function Background() {
	return (
		<div className="fixed top-0 left-0 flex items-center justify-center overflow-hidden  h-dvh w-dvw -z-10 bg-gradient-to-b from-black to-[#00001e]">
			<Image
				alt=""
				src={bg}
				width={700}
				// placeholder="blur"
				priority
			/>
		</div>
	)
}

import Image from 'next/image'

import playerSelect from '@/components/landing/images/playerSelect@3x.png'
import SitePicker from '@/components/landing/SitePicker'

export default async function Landing() {
	return (
		<div className="flex flex-col items-center mb-4 text-center">
			<Image className="w-full h-full max-w-2xl" alt="Player Select" src={playerSelect} width={600} draggable="false" priority />
			<SitePicker />
		</div>
	)
}

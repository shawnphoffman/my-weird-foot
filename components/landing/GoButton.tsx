import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

import bh from './images/titleBlueHarvest@3x.png'
import hp from './images/titleHighPotion@3x.png'
import visit from './images/titleVisit@3x.png'

export default function GoButton({ i }) {
	const containerClasses = classNames(!i ? 'invisible h-0' : '')
	const bhClasses = classNames(i === 1 ? 'visible h-full' : 'invisible h-0')
	const hpClasses = classNames(i !== 1 ? 'visible h-full' : 'invisible h-0')

	return (
		<div className={`flex justify-center m-4 max-[600px]:mb-24 ${containerClasses}`}>
			<Link
				className="py-2 px-1 bg-[blue] hover:bg-[purple] flex flex-col duration-300 transition-colors max-[600px]:py-4 max-[600px]:px-2 font-bold border-2 border-neutral-400"
				href={i === 1 ? 'https://blueharvest.rocks' : '/home'}
			>
				<Image className="w-full max-w-[400px]" alt="" src={visit} width={400} draggable="false" priority />
				<Image className={`w-full max-w-[400px] ${bhClasses}`} alt="" src={bh} width={400} draggable="false" />
				<Image className={`w-full max-w-[400px] ${hpClasses}`} alt="" src={hp} width={400} draggable="false" />
			</Link>
		</div>
	)
}

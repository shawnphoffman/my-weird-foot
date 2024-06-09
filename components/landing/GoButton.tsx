import Image from 'next/image'

import bh from './images/titleBlueHarvest@3x.png'
import hp from './images/titleHighPotion@3x.png'
import visit from './images/titleVisit@3x.png'

export default function GoButton({ i }) {
	if (!i) return null

	return (
		<div className={`flex justify-center m-4 max-[600px]:mb-24`}>
			<a
				className="py-2 px-1 bg-[blue] hover:bg-[purple] flex flex-col duration-300 transition-colors max-[600px]:py-4 max-[600px]:px-2 font-bold border-2 border-neutral-400"
				href={i === 1 ? 'https://blueharvest.rocks' : '/home'}
			>
				<Image className="w-full h-full max-w-[400px]" alt="" src={visit} width={400} draggable="false" priority />
				{i === 1 ? (
					<Image className="w-full h-full max-w-[400px]" alt="" src={bh} width={400} draggable="false" />
				) : (
					<Image className="w-full h-full max-w-[400px]" alt="" src={hp} width={400} draggable="false" />
				)}
			</a>
		</div>
	)
}

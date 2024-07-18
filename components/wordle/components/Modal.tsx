import { faCircleXmark } from '@awesome.me/kit-d7ccc5bb1a/icons/classic/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Modal(props) {
	return (
		<div className="absolute grid w-full h-full place-cente">
			<div
				className="z-10 flex flex-col p-5 pb-10 bg-white place-self-center rounded-xl drop-shadow-3xl dark:bg-zinc-800 dark:text-white"
				style={{ width: 'min(600px, 90vw)', height: 'min(580px, 80vh)' }}
			>
				<div className="flex items-center justify-between pb-5">
					<FontAwesomeIcon icon={faCircleXmark} className="text-white dark:text-zinc-800" />
					<h2 className="text-2xl font-black">{props.title}</h2>
					<FontAwesomeIcon
						icon={faCircleXmark}
						onClick={() => {
							props.help(false)
						}}
					/>
				</div>
				<div className="overflow-y-scroll modal overscroll-contain sm:px-7">{props.children}</div>
			</div>
			<div
				className="absolute z-0 grid w-full h-full place-cente"
				onClick={() => {
					props.help(false)
				}}
			/>
		</div>
	)
}

export default Modal

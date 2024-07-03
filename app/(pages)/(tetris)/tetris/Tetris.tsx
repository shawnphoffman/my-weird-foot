'use client'

import dynamic from 'next/dynamic'
const Tetris = dynamic(() => import('react-tetris'), { ssr: false })

export default function TetrisComp() {
	return (
		<Tetris
			keyboardControls={{
				// Default values shown here. These will be used if no
				// `keyboardControls` prop is provided.
				down: 'MOVE_DOWN',
				left: 'MOVE_LEFT',
				right: 'MOVE_RIGHT',
				space: 'HARD_DROP',
				z: 'FLIP_COUNTERCLOCKWISE',
				x: 'FLIP_CLOCKWISE',
				up: 'FLIP_CLOCKWISE',
				p: 'TOGGLE_PAUSE',
				c: 'HOLD',
				shift: 'HOLD',
				r: 'RESTART',
			}}
		>
			{({ HeldPiece, Gameboard, PieceQueue, points, linesCleared, state, controller, level }) => (
				<>
					<div className="flex flex-row items-start justify-center gap-8">
						{/*  */}
						<div className="flex flex-col items-center gap-2">
							<h2>Hold</h2>
							<HeldPiece />
							<div className="flex flex-col items-start w-full mt-4">
								<p>Points: {points}</p>
								<p>Lines: {linesCleared}</p>
							</div>
						</div>
						{/*  */}
						<div className="flex flex-col items-center gap-2">
							<h2>Level: {level}</h2>
							<Gameboard />
						</div>
						{/*  */}
						<div className="flex flex-col items-center gap-2 [&_table]:mb-2 [&_.game-block]:w-6 [&_.game-block]:h-6">
							<h2>Queue</h2>
							<PieceQueue />
						</div>
					</div>
					{state === 'PAUSED' && (
						<div>
							<h2>Paused</h2>
						</div>
					)}
					{state === 'LOST' && (
						<div>
							<h2>Game Over</h2>
							<button onClick={controller.restart}>New game</button>
						</div>
					)}
				</>
			)}
		</Tetris>
	)
}

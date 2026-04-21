import type { GameState } from '@/components/adventure/types'

function HpBar({ hp }: { hp: number }) {
	const pct = Math.max(0, Math.min(100, hp))
	const color = pct > 60 ? 'bg-hp3' : pct > 30 ? 'bg-hp4' : 'bg-error'
	return (
		<div className="relative w-full h-2 overflow-hidden bg-black rounded border border-hp1">
			<div className={`h-full transition-[width] duration-500 ${color}`} style={{ width: `${pct}%` }} />
		</div>
	)
}

function PartyRow({ name, hp, status }: { name: string; hp: number; status: string }) {
	return (
		<div className="flex flex-col gap-1">
			<div className="flex items-baseline justify-between text-xs">
				<span className="font-bold text-hp3 uppercase tracking-wider">{name}</span>
				<span className="text-hp4 font-mono">{hp}/100</span>
			</div>
			<HpBar hp={hp} />
			<div className="text-xs text-white/70 italic">{status}</div>
		</div>
	)
}

export default function GameStatePanel({ state }: { state: GameState }) {
	const { turn, location, party, inventory, objective, knownLocations, gameOver } = state

	return (
		<aside className="flex flex-col gap-4 p-4 bg-black/40 border border-hp1 rounded-xl text-white text-sm md:w-72 md:shrink-0 md:h-full">
			<header className="flex items-baseline justify-between pb-2 border-b border-hp1">
				<h2 className="text-hp3 font-bold uppercase tracking-widest text-xs">Status</h2>
				<span className="text-hp4 font-mono text-xs">Turn {turn}</span>
			</header>

			<section className="flex flex-col gap-2">
				<div className="text-xs uppercase tracking-wider text-hp3/80 font-bold">Location</div>
				<div className="text-white text-base leading-snug">{location}</div>
			</section>

			<section className="flex flex-col gap-3">
				<div className="text-xs uppercase tracking-wider text-hp3/80 font-bold">Party</div>
				<PartyRow name="Hawes" hp={party.hawes.hp} status={party.hawes.status} />
				<PartyRow name="Steve" hp={party.steve.hp} status={party.steve.status} />
				<PartyRow name="Walter" hp={party.walter.hp} status={party.walter.status} />
			</section>

			<section className="flex flex-col gap-2">
				<div className="text-xs uppercase tracking-wider text-hp3/80 font-bold">Inventory</div>
				{inventory.length === 0 ? (
					<div className="text-white/50 italic text-xs">Empty</div>
				) : (
					<ul className="flex flex-col gap-1">
						{inventory.map((item, i) => (
							<li key={`${item}-${i}`} className="text-xs text-white/90 flex gap-2">
								<span aria-hidden className="text-hp4">‣</span>
								<span>{item}</span>
							</li>
						))}
					</ul>
				)}
			</section>

			<section className="flex flex-col gap-2">
				<div className="text-xs uppercase tracking-wider text-hp3/80 font-bold">Objective</div>
				<div className="text-sm leading-snug text-hp4">{objective}</div>
			</section>

			{knownLocations.length > 0 && (
				<section className="flex flex-col gap-2">
					<div className="text-xs uppercase tracking-wider text-hp3/80 font-bold">Known Locations</div>
					<ul className="flex flex-wrap gap-1">
						{knownLocations.map((loc, i) => (
							<li key={`${loc}-${i}`} className="text-[10px] px-2 py-1 rounded-full bg-hp1/60 border border-hp1 text-white/80">
								{loc}
							</li>
						))}
					</ul>
				</section>
			)}

			{gameOver && (
				<section
					className={`flex flex-col gap-2 p-3 rounded-lg border-2 ${
						gameOver.won ? 'border-hp3 bg-hp1/40' : 'border-error bg-error/10'
					}`}
				>
					<div className={`text-lg font-bold ${gameOver.won ? 'text-hp3' : 'text-error'}`}>
						{gameOver.won ? 'VICTORY' : 'GAME OVER'}
					</div>
					<div className="text-xs text-white/90 leading-snug">{gameOver.summary}</div>
				</section>
			)}
		</aside>
	)
}

import type { InferUITools, UIMessage } from 'ai'
import { tool } from 'ai'
import { z } from 'zod'

export const gameStateSchema = z.object({
	turn: z.number().int().min(1).describe('Current turn number, increments by 1 each turn.'),
	location: z.string().describe('Short name of the party\'s current location.'),
	knownLocations: z.array(z.string()).describe('All locations discovered so far.'),
	party: z.object({
		hawes: z.object({ hp: z.number().int().min(0).max(100), status: z.string() }),
		steve: z.object({ hp: z.number().int().min(0).max(100), status: z.string() }),
		walter: z.object({ hp: z.number().int().min(0).max(100), status: z.string() }),
	}),
	inventory: z.array(z.string()).max(10),
	objective: z.string().describe('Single-sentence immediate goal.'),
	gameOver: z
		.object({
			won: z.boolean(),
			summary: z.string(),
		})
		.nullable()
		.describe('Set only when the game ends. Null otherwise.'),
})

export type GameState = z.infer<typeof gameStateSchema>

export const adventureTools = {
	updateGameState: tool({
		description: 'Update the structured game state. Call this once at the very start of every assistant turn, before writing the narrative.',
		inputSchema: gameStateSchema,
		execute: async input => input,
	}),
}

export type AdventureUITools = InferUITools<typeof adventureTools>
export type AdventureUIMessage = UIMessage<never, Record<string, never>, AdventureUITools>

export const INITIAL_GAME_STATE: GameState = {
	turn: 0,
	location: 'Hawes\' Home, Hightopia',
	knownLocations: ['Hawes\' Home', 'Emerald Pixels Forest', 'Over-Clock City'],
	party: {
		hawes: { hp: 100, status: 'Ready' },
		steve: { hp: 100, status: 'Ready' },
		walter: { hp: 100, status: 'Purring' },
	},
	inventory: ['Basic adventuring gear', 'Mind-altering potions', 'Sugar-free Red Bull'],
	objective: 'Decide where to begin the hunt for Mass Effect: Uncensored.',
	gameOver: null,
}

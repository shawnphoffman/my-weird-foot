import { useEffect, useState } from 'react'

import { gamingWords } from '../gamingWords'
import words from '../words'

import Box from './Box'

const allWords = [...gamingWords.map(i => i.word.toLowerCase()), ...words.map(i => i.toLowerCase())]
let defaultBoard: any = []
let defaultLetters = []

'abcdefghijklmnopqrstuvwxyz'.split('').forEach(i => {
	defaultLetters[i] = ''
})

for (let i = 0; i < 6; i++) {
	defaultBoard.push([])
	for (let j = 0; j < 5; j++) {
		defaultBoard[i].push(['', ''])
	}
}

function Board({ clicks, letter, error, letters: propLetters }) {
	const [letters, setLetters] = useState(defaultLetters)
	const [board, setBoard] = useState(defaultBoard)
	const [changed, setChanged] = useState(false)
	const [row, setRow] = useState(0)
	const [col, setCol] = useState(0)
	const [win, setWin] = useState(false)
	const [lost, setLost] = useState(false)
	const [message, setMessage] = useState('')

	const selection = gamingWords[Math.floor(Math.random() * gamingWords.length - 1)]
	const correct = selection.word.toUpperCase()
	const hint = selection.hint

	useEffect(() => {
		if (win || lost) {
			console.log('Game ended!')
		} else {
			if (clicks !== 0) {
				if (letter === 'DEL') {
					setCol(col === 0 ? 0 : col - 1)
					setBoard(prevBoard => {
						prevBoard[row][col === 0 ? 0 : col - 1][0] = ''
						return prevBoard
					})
				} else {
					setBoard(prevBoard => {
						if (col < 5) {
							if (letter !== 'ENTER') {
								prevBoard[row][col][0] = letter
								setCol(col + 1)
							} else {
								error('Words are 5 letters long!')
								setTimeout(() => {
									error('')
								}, 1000)
							}
						} else {
							if (letter === 'ENTER') {
								let correctLetters = 0
								let word = ''
								for (let i = 0; i < 5; i++) {
									word += prevBoard[row][i][0]
								}
								if (allWords.includes(word.toLowerCase())) {
									for (let i = 0; i < 5; i++) {
										if (correct[i] === prevBoard[row][i][0]) {
											prevBoard[row][i][1] = 'C'
											correctLetters++
										} else if (correct.includes(prevBoard[row][i][0])) prevBoard[row][i][1] = 'E'
										else prevBoard[row][i][1] = 'N'
										setRow(row + 1)
										if (row === 5) {
											setLost(true)
											setTimeout(() => {
												setMessage(`It was ${correct}`)
											}, 750)
										}

										setCol(0)
										setLetters(prev => {
											// @ts-ignore
											prev[board[row][i][0]] = board[row][i][1]
											return prev
										})
									}
									setChanged(!changed)

									if (correctLetters === 5) {
										setWin(true)
										setTimeout(() => {
											setMessage('You WIN')
										}, 750)
									}
									return prevBoard
								} else {
									error('Word not in dictionary')
									// debugger
									setTimeout(() => {
										error('')
									}, 2000)
								}
							}
						}
						return prevBoard
					})
				}
			}
		}
	}, [clicks])

	useEffect(() => {
		propLetters(letters)
	}, [changed])

	return (
		<div className="grid items-center justify-center px-10 py-5 gap-y-1 w-100">
			<div className="grid h-8 font-bold text-white place-items-center">{hint}</div>
			{board.map((row, key) => {
				return (
					<div key={key} className="flex gap-1 w-fit">
						{row.map((value, key) => (
							<Box key={key} value={value[0]} state={value[1]} pos={key} />
						))}
					</div>
				)
			})}
			<div className="grid h-8 font-bold place-items-center dark:text-white">{lost || win ? message : ''}</div>
		</div>
	)
}

export default Board

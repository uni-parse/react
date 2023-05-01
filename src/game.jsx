import './sass/game.scss'
import { useState } from 'react'
import Board from './_board'
import Progress from './_progress'

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  const [xo, setXo] = useState('X')
  const [turn, setTurn] = useState('player')

  const progress = history[currentMove]

  return (
    <div className='game'>
      <Progress
        setXo={setXo}
        setTurn={setTurn}
        history={history}
        setCurrentMove={setCurrentMove}
      />
      <Board
        turn={turn}
        setTurn={setTurn}
        xo={xo}
        progress={progress}
        onPlay={handlePlay}
      />
    </div>
  )

  function handlePlay(nextProgress, ai) {
    const nextHistory = [
      ...history.slice(0, currentMove + 1),
      nextProgress,
    ]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)

    setXo(ai ? 'X' : 'O')
  }
}

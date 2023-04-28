import './sass/game.scss'
import { useState } from 'react'
import Board from './_board'
import Progress from './_progress'

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)

  const xo = currentMove % 2 ? 'O' : 'X'
  const progress = history[currentMove]

  return (
    <div className='game'>
      <Board xo={xo} progress={progress} onPlay={handlePlay} />
      <Progress
        history={history}
        setCurrentMove={setCurrentMove}
      />
    </div>
  )

  function handlePlay(nextProgress) {
    const nextHistory = [
      ...history.slice(0, currentMove + 1),
      nextProgress,
    ]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }
}

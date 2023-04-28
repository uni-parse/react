export default function Board({ xo, progress, onPlay }) {
  const squares = progress.map((state, i) => (
    <Square
      key={i}
      value={state}
      onSquareClick={() => handleClick(i)}
    />
  ))

  const winner = calculateWinner(progress)
  const status = winner
    ? `👑winner: ${winner}`
    : `👤player: ${xo}`

  return (
    <div className='game-board'>
      <h3>{status}</h3>
      <div className='board'>{squares}</div>
    </div>
  )

  function handleClick(i) {
    if (progress[i] || winner) return

    const nextProgress = progress.slice() // copy (immutability)
    nextProgress.splice(i, 1, xo)

    onPlay(nextProgress)
  }
}

function Square({ value, onSquareClick }) {
  return (
    <button className='square' onClick={onSquareClick}>
      {value}
    </button>
  )
}

function calculateWinner(progress) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]

    if (
      progress[a] &&
      progress[a] === progress[b] &&
      progress[a] === progress[c]
    )
      return progress[a] // 'X' | 'O'
  }

  return null
}

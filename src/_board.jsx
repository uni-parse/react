let canPlay = true
export default function Board({ xo, progress, onPlay }) {
  const squares = progress.map((xo, i) => (
    <Square
      key={i}
      value={xo}
      onSquareClick={() => handleClick(i)}
    />
  ))

  const winner = calculateWinner(progress)
  let status
  if (/^X|O$/.test(winner))
    status = `👑Winner: ${winner == 'X' ? 'Player' : 'AI'}`
  else if (winner == 'gameOver') status = 'Game Over'
  else if (winner == 'continue')
    status = xo == 'X' ? '👤Player: X' : '💻AI: O'

  //console.log(winner)

  return (
    <div className='game-board'>
      <h3>{status}</h3>
      <div className='board'>{squares}</div>
    </div>
  )

  function handleClick(i) {
    if (progress[i] || winner != 'continue' || !canPlay) return

    const nextProgress = progress.slice() // copy (immutability)
    nextProgress.splice(i, 1, xo)

    onPlay(nextProgress)

    canPlay = false

    // ai turn
    setTimeout(() => {
      //return
      if (calculateWinner(nextProgress) != 'continue') return

      const emptyIndexes = nextProgress.reduce((arr, xo, i) => {
        if (!xo) arr.push(i)
        return arr
      }, [])

      const randomIndex =
        emptyIndexes[
          Math.floor(Math.random() * emptyIndexes.length)
        ]

      const aiProgress = nextProgress.slice()
      aiProgress.splice(randomIndex, 1, xo == 'X' ? 'O' : 'X')

      onPlay(aiProgress, 'ai')

      canPlay = true
    }, 700)
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

  // find winner
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]

    if (
      progress[a] &&
      progress[a] === progress[b] &&
      progress[a] === progress[c]
    )
      return progress[a] // 'X' | 'O'
  }

  if (!progress.includes(null)) return 'gameOver'

  return 'continue'
}

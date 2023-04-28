export default function Progress({ history, setCurrentMove }) {
  const moves = history.map((progress, i) => {
    const description = i ? `undo to move #${i}` : 'restart'
    return (
      <li key={i}>
        <button onClick={() => setCurrentMove(i)}>
          {description}
        </button>
      </li>
    )
  })
  return <ol className='game-info'>{moves}</ol>
}

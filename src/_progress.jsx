export default function Progress({
  setXo,
  setTurn,
  history,
  setCurrentMove,
}) {
  const moves = history.map((progress, i) => {
    const description = i ? `move #${i}` : 'restart'
    return (
      <button
        key={i}
        onClick={() => {
          setXo('X')
          setTurn('player')
          setCurrentMove(i)
        }}>
        {description}
      </button>
    )
  })
  return (
    <fieldset className='game-info'>
      <legend>Progress</legend>
      {moves}
    </fieldset>
  )
}

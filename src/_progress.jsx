export default function Progress({ history, setCurrentMove }) {
  const moves = history.map((progress, i) => {
    const description = i ? `move #${i}` : 'restart'
    return (
      <button key={i} onClick={() => setCurrentMove(i)}>
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

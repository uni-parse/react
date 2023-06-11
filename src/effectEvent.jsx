import {
  useState,
  useEffect,
  useEffectEvent
} from 'react'

export default function EffectEvent() {
  const [count, setCount] = useState(0)
  const [increment, setIncrement] = useState(1)

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + increment)
    }, 1000)
    return () => clearInterval(id)

    //1 eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count])

  return (
    <>
      <button>start</button>
      <br />
      <p>
        increment by:{' '}
        <button onClick={() => setIncrement(increment - 1)}>-</button>
        {increment}
        <button onClick={() => setIncrement(increment + 1)}>+</button>
      </p>
      <output>count: {count}</output>
    </>
  )
}

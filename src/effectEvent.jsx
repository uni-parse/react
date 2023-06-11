import {
  useState,
  useEffect,
  experimental_useEffectEvent as useEffectEvent,
} from 'react'

//const extra = 1

export default function EffectEvent() {
  const [count, setCount] = useState(0)
  const [increment, setIncrement] = useState(1)

  const onCount = useEffectEvent((count) =>
    setCount(count + increment),
  )

  useEffect(() => {
    const id = setInterval(() => onCount(count), 1000)
    return () => clearInterval(id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count])


  return (
    <>
      <p>
        increment by:{' '}
        <button onClick={() => setIncrement(increment - 1)}>
          -
        </button>
        {` ${increment} `}
        <button onClick={() => setIncrement(increment + 1)}>
          +
        </button>
      </p>
      <output>count: {count}</output>
    </>
  )
}

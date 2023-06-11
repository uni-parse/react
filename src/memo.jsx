import { useState, useRef, useMemo } from 'react'

export default function Memo() {
  const [num, setNum] = useState(0)
  const ref = useRef(null)

  // memory as advanced chached Map([num, ...] => value)
  // but memorize just previous key/value pair , ⚠️not all.
  const output = useMemo(() => {
    console.time(`fibonchi(${num})`)
    const result = fibonacci(num)
    console.timeEnd(`fibonchi(${num})`)
    return result
  }, [num])

  //console.time(`fibonchi(${num})`)
  //const output = fibonacci(num)
  //console.timeEnd(`fibonchi(${num})`)

  return (
    <>
      fibonacci(
      <input ref={ref} placeholder="0" size="4" />){' '}
      <button onClick={() => setNum(+ref.current.value)}>
        {' '}
        ={' '}
      </button>{' '}
      {output}
    </>
  )
}

function fibonacci(num) {
  return [0, 1].includes(num)
    ? num
    : fibonacci(num - 1) + fibonacci(num - 2)
}

// ⚠️⚠️ we still need to implement cache decorators
function cacheDicorator(fn) {
  const cache = new Map()
  return function wrapper(num) {
    return cache.get(num) ?? cache.set(num, fn(num)).get(num)
  }
}

// eslint-disable-next-line no-func-assign
fibonacci = cacheDicorator(fibonacci)

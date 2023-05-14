import { useState } from 'react'

export default function Form() {
  const [answer, setAnswer] = useState(''),
    [err, setErr] = useState(null),
    [status, setStatus] = useState('typing'),
    //'typing', 'submiting', 'success'
    isEmpty = !answer.length,
    isError = !!err

  return status == 'success' ? (
    <h1 style={{ color: 'yellowgreen' }}>currect!</h1>
  ) : (
    <>
      <h2>JavaScript quiz</h2>

      <p>waht engine chrome use to run JavaScript?</p>

      <form onSubmit={handleSubmit}>
        <input
          value={answer}
          onChange={e => setAnswer(e.target.value)}
          disabled={status === 'submitting'}
        />
        <button disabled={isEmpty || status == 'submitting'}>
          Submit
        </button>
        {isError && (
          <p style={{ color: 'darkorange' }}>{err.message}</p>
        )}
      </form>
    </>
  )

  async function handleSubmit(e) {
    e.preventDefault()

    setStatus('submitting')

    try {
      await submitForm(answer)
      setStatus('success')
    } catch (err) {
      setErr(err)
      setStatus('typing')
    }
  }
}

// Pretend it's hitting the network.
function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer == 'v8') resolve()
      else reject(new Error('wrong answer, Try again!'))
    }, 1500)
  })
}

import { useRef, useEffect, useState } from 'react'
import videoUrl from './assets/panda.mkv?url'

export default function Effect() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <>
      <VideoPlayer src={videoUrl} isPlaying={isPlaying} />
      <br />
      <button onClick={() => setIsPlaying(!isPlaying)}>
        play / puase
      </button>
    </>
  )
}

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null)
  useEffect(() => {
    ref.current[isPlaying ? 'play' : 'pause']()
  })

  return <video src={src} ref={ref} loop controls playsInline />
}

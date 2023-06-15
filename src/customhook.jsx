import {
  useSyncExternalStore,
  useEffect,
  useState,
} from 'react'

export default function CustomHookComponent() {
  const isOnline = useOnlineStatus()

  // const isOnline = useOnlineStatus()
  return (
    <p id='par'>
      network state: {isOnline ? 'online' : 'offline'}
    </p>
  )
}

function useOnlineStatus() {
  const subscribe = handler => {
    const evns = ['online', 'offline']
    evns.forEach(e => window.addEventListener(e, handler))

    return () =>
      evns.forEach(e => window.removeEventListener(e, handler))
  }
  const getSnapshot = () => navigator.onLine

  return useSyncExternalStore(subscribe, getSnapshot)
}

// old fashion
// eslint-disable-next-line no-unused-vars
function useOnlineStatusOld() {
  const [isOnline, setIsOnline] = useState(navigator.onLine)

  useEffect(() => {
    const handler = () => setIsOnline(navigator.onLine)

    window.addEventListener('online', handler)
    window.addEventListener('offline', handler)

    return () => {
      window.removeEventListener('online', handler)
      window.removeEventListener('offline', handler)
    }
  }, [])

  return isOnline
}

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import App from './app.jsx'
// import Game from './game.jsx'
// import Filter from './filter.jsx'
// import Contex from './context.jsx'
// import ImgRef from './ref.jsx'
// import Effect from './effect.jsx'
// import Memo from './memo.jsx'
// import EffectEvent from './effectEvent.jsx' //error experimental

// import Queue from './tasks/useState updates queue/queue.jsx'
// import Test from './test.jsx'
// import DontUseEffect from './tasks/useEffect/dontUseEffect.jsx'

import './sass/main.scss'

const main = document.createElement('main')
document.body.append(main)

const root = createRoot(main)
root.render(
  <StrictMode>
    <h1 className="pt-2 bg-red-500 p-4">test tailwind</h1>
    <br />
  </StrictMode>,
)

/**
    {false && <EffectEvent />}
    {false && <DontUseEffect />}
    {false && <Memo />}
    {false && <Effect />}
    {false && <ImgRef />}
    {false && <Contex />}
    {false && <Test />}
    {false && <Queue />}
    {false && <Filter />}
    {false && <Game />}
    {false && <App />}
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './app.jsx'
import Game from './game.jsx'
import Filter from './filter.jsx'

import Queue from './tasks/useState updates queue/queue.jsx'

//import './sass/main.scss'

const main = document.createElement('main')
document.body.append(main)

const root = createRoot(main)
root.render(
  <StrictMode>
    {true && <Queue />}
    {false && <Filter />}
    {false && <Game />}
    {false && <App />}
  </StrictMode>
)

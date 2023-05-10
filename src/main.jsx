import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './app.jsx'
import Game from './game.jsx'
import Filter from './filter.jsx'

//import './sass/main.scss'

const main = document.createElement('main')
document.body.append(main)

const root = createRoot(main)
root.render(
  <StrictMode>
    {false && <Filter />}
    {true && <Game />}
    {false && <App />}
  </StrictMode>
)

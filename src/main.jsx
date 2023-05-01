import React from 'react'
import ReactDOM from 'react-dom/client'

//import './sass/main.scss'

import App from './app.jsx'
import Game from './game.jsx'
import Filter from './filter.jsx'

const root = document.getElementById('root')

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    {false && <Filter />}
    {true && <Game />}
    {false && <App />}
  </React.StrictMode>
)

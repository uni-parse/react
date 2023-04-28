import React from 'react'
import ReactDOM from 'react-dom/client'

//import './sass/main.scss'

import App from './app.jsx'
import Game from './game.jsx'

const root = document.getElementById('root')

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Game />
    {false && <App />}
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import { AuthContext } from './contexts'
import { login } from './services/auth'
import './styles/index.scss'

// ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContext.Provider value = {{name: "Pierre"}}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </AuthContext.Provider>
  </React.StrictMode>
)
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AniccaToastProvider, AniccaPopupProvider } from 'anicca-ui'
import 'anicca-ui/styles.css'
import './index.css'
import App from './App'

const saved = localStorage.getItem('anicca-theme')
if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AniccaPopupProvider>
        <AniccaToastProvider position="top-right">
          <App />
        </AniccaToastProvider>
      </AniccaPopupProvider>
    </BrowserRouter>
  </React.StrictMode>
)

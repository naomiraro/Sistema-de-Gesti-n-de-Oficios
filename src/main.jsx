import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/theme.css'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          borderRadius: '10px',
          background: '#fff',
          color: '#701A30',
          boxShadow: 'var(--sombra)'
        },
        success: { style: { background: '#F0FDF4', color: '#166534' } },
        error: { style: { background: '#FEF2F2', color: '#DC2626' } }
      }}
    />
  </React.StrictMode>,
)
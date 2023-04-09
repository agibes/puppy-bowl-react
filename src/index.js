import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components'
import './style.css'

createRoot(document.querySelector('#root')).render(<App />)
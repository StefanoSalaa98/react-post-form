import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyMain from './components/MyMain'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyMain />
  </StrictMode>,
)

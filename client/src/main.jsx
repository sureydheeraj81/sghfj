// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "@fortawesome/fontawesome-free/css/all.min.css"
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'


createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
)

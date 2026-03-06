import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.js'
import './index.css'   // 👈 AQUÍ va Tailwind
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'class', // activación manual con clase .dark
  theme: {
    extend: {},
  },
  plugins: [],
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
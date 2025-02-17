import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Home from './pages/Home/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    </>
  )
}

export default App

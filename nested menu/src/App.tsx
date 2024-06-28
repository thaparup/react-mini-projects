import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MenuArrayElement from './component/MenuArrayElement'
import { MenuData } from './MenuData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Hello world</h1>
      <MenuArrayElement array={MenuData} />
    </div>
  )
}

export default App

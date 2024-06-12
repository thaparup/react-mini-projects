import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PiStarThin } from 'react-icons/pi'
import Star from './components/Star'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        <Star noOfStars={10} />
      </div>
    </>
  )
}

export default App

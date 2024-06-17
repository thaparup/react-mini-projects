import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './component/Products'

function App() {


  return (
    <>
      <Products url='https://dummyjson.com/products' limit={8} skip={0} />
    </>
  )
}

export default App

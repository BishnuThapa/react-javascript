import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count+1)
  }
  return (
    <>
      <h1>Hello From React Javascript course</h1>
      <h4>Count:{count}</h4>
      <button onClick={increment} >Increment</button>
    </>
  )
}

export default App

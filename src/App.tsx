import { useState } from 'react'
import Button from './components/Button'
import Tarjeta from "./components/Tarjeta";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Proyecto colaborativo</h1>

      <Tarjeta />

      <Button onClick={() => setCount((count) => count + 1)}>
        Count is {count}
      </Button>
    </div>
  )
}

export default App
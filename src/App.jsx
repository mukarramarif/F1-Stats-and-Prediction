import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Charts from './components/Charts/Charts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Charts></Charts>
    </>
  )
}

export default App

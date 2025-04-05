import { useState } from 'react'

import './App.css'

function App() {

  const [count, setCount] = useState(0)

 function increaseCount() {
  setCount(count => count+1)
 }

  return (
    <>
     <h1>{count}</h1>
     <button onClick={increaseCount}>Increase Count</button>
    </>
  )
}

export default App

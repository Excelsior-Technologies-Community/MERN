import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpanseTracker from "./ExpanseTracker.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ExpanseTracker/>
    </>
  )
}

export default App;

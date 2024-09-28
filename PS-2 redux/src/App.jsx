import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './Components/Addtododisp'
import TodoSlice from './Slices/slicetodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <h1>Everybody</h1>
 <AddTodo/>
 <TodoSlice/>
    </>
  )
}

export default App

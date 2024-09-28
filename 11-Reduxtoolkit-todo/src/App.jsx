import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './Components/Addtodo'
import Todos from './Components/Todos'
import Updatetodo from './Components/Updatetodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <h1>everbody</h1>
 <AddTodo/>
 <Todos/>
 <Updatetodo/>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from "./Components/Home"

const App = () => {

  return <div className='bg-[#1F1E24] w-screen h=screen'>

<Routes>
  <Route path='/' element={<Home/>} />
</Routes>

  </div>

 


}
 


export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageUpload from "./Components/ImageUpload"
  function App() {
 
  return (
    <>
      
      <div>
        {/* <FirebaseImageUpload/> */}
        <ImageUpload/>
      </div>
        
    </>
  )
}

export default App

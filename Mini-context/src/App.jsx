 
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './Context/usercontextprovider'

function App() {
 
// In whichever component you want to take data then usecontext and use the data

  return (
    <UserContextProvider>
    <h1>React with chai</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App

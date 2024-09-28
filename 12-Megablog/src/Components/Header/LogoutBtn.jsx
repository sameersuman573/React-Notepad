import React from 'react'
import { useDispatch } from 'react-redux'
import authservice from '../../Appwrite/auth'
import { logout } from '../../Store/authSlice' 
// redux-reducer logout store 



// after logout we need to dispatch something so we need reducer 
function LogoutBtn() { 
    const dispatch = useDispatch()


    
    const logoutHandler = () => {
        // to handle promise we use .then -> Promises provide a cleaner alternative to using callbacks for handling asynchronous operations, especially when dealing with multiple asynchronous operations in sequence or in parallel. They help avoid the problem of "callback hell" and make asynchronous code easier to read and maintain.





        // To logout physically
        authservice.logout().then(() => {
            // if logout is done successfuly then
            // To update the state we use dispatch
            dispatch(logout())
        })
    }



  return (
    <button 
    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}>Logout</button>
   )
}

export default LogoutBtn
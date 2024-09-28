 import React from 'react'
 import { auth, onAuthStateChanged } from 'firebase/auth'
 import { useEffect } from 'react'
 import { useState } from 'react'
 import { useNavigate } from 'react-router-dom'
 import Loader from '../Components/Cmmon/Loader/loader'



 
 export default function Profile() {
    const [loading, setloading] = useState(true)
    let navigate = useNavigate()

    useEffect(() => {
        onAuthStateChanged(auth, (res) => {
            if(res?.accessToken){
                navigate("/profile")
        } else{
            setloading(false);
        }
        });
    } , [])
   return loading? <Loader/> : <LoadingComponent/>
 }


 import React from "react";
 import HomeComponent from '../Components/HomeComponent'
 import { auth, onAuthStateChanged } from 'firebase/auth'
 import { useState, useEffect } from "react";
 import Loader from '../Components/Common/Loader/loader'
// import { auth } from "firebase/auth";
 export default function Home() {

   useEffect(() => {
    onAuthStateChanged(auth , (res) => {
      if(res?.accessToken){
         Navigate("/home")
      }
      else{
         setloading(false)
      }
    })
      
   }, [])
   

   
    return loading? <Loader/> : <HomeComponent/>
 }
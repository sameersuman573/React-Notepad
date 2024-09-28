import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
// THIS IS ALSO A HOOK



function Github() {
  // this is a hook
    const data = useLoaderData()
    // to show followers we will be using api call  when our components loads
//         const[data,setdata] = useState([])

//     useEffect(() => {
//         // api calling
// fetch('https://api.github.com/users/hiteshchoudhary')
// .then(response => response.json())
// .then(data => {
//     console.log(data);
//     setdata(data)
// } )
//     }, [])





  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github :{data.followers}
    <img src={data.avatar_url} alt='Git picture' width={300}></img>
    </div>
  )

}


export default Github


export const githubinfoloader = async () => {
  const  response = await fetch('https://api.github.com/users/hiteshchoudhary')
return response.json()

}
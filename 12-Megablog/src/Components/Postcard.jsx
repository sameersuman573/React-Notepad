import React from 'react'
import appwriteService from "../Appwrite/config"
import {Link} from 'react-router-dom'



// pass some props which you will get from appwrite when you will use query

function Postcard({$id,title,featuredimage}) {
    // $id is the synatx of appwrite
  return (

// all the cards should be clickable so we will use link
    <Link 
    // The advanatge of using link is that you donot have to give url just where you are from there 
    // In link there is tonot href

    
    // path
    to={`/post/${$id}`} >
        <div className='w-full bg-gray-100 rounded-xl p-4 '>

            <div className='w-full justify-center mb-4'>
            {/* To take image preview */}
                <img src={appwriteService.getfilepreview(featuredimage)}  
                alt={title} 
                className='rounded-xl' />
            </div>

            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
    </Link>



   )
}

export default Postcard
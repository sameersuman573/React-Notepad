import React from 'react'
import { useParams } from 'react-router-dom'
// Dynamic Content: Params are commonly used to create dynamic content on web pages. They allow developers to pass variables to server-side scripts or JavaScript functions, enabling the generation of content based on user input, database queries, or other dynamic factors.

// Routing: In frameworks like Express.js for Node.js or React Router for React.js, params are often used in routing to define dynamic routes. This allows for the creation of flexible routes that can handle different parameters and serve corresponding content.

function User() {
  // user id is taken to main.jsx
  
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'> User: {userid}</div>
  )
}

export default User
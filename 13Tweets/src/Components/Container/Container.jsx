import React, { Children } from 'react'


// it is a box which has only styling properties
export default function Container({Children}) {
  return (
    <div className='w-full max-w-7xl mx-auto px-4'>
        {Children}
    </div>
  )
}

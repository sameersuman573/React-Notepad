import React from 'react'

const Topnav = () => {
  return (
    <div className='w-full  h-[10vh] relative flex justify-center items-center'>
        <i class="text-zinc-400 text-3xl  ri-edit-circle-line"></i>
        <input 
       className='w-[50%] mx-10 p-5 text-xl outline-none border-none bg-transparent ' placeholder= "search you #hero" type='text' />
        <i class="text-zinc-400 text-3xl  ri-color-filter-fill"></i>

        <div className='absolute w-[50%] h-[50vh] bg-red-100 top-[100%]'>
            <Links className="inline-block bg-red-200 w-[100%]">
                <img src='' alt=''></img>
                <span>hey evryone</span>
            </Links>
        </div>

    </div>
  )
}

export default Topnav
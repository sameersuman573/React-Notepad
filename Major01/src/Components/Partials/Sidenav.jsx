import React from 'react'
import {Link} from 'react-router-dom'
const Sidenav = () => {
  return (
    <div className='w-[20%] h-full border-r-2 border-zinc-400 py-3'>
      <h1 className='text-2xl text-white font-bold'>
        <i className='text-[#6556CD] ri-tv-fill mr-2'></i>
        <span className='text-2xl'>Major</span>
      </h1>

      <nav className='flex flex-col text-zinc-200 text-xl gap-3'>
      <h1 className='text-white font-semibold text-xl text-centre mt-10 mb-5 '> New Feeds</h1>
      <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"><i class="ri-fire-fill"></i> Trending</Link>
      <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"><i class="ri-firefox-line"></i>Popular</Link>
      <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"><i class="ri-send-plane-2-fill"></i>Movies</Link>
      <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"><i class="ri-firebase-line"></i>Tv shows</Link>
      <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"><i class="ri-stack-line"></i>People</Link>
      </nav>
<hr className='border-none h-[1px] bg-zinc-400'/>
      <nav className='flex flex-col text-zinc-200 text-xl gap-3'>
      <h1 className='text-white font-semibold text-xl text-centre mt-10 mb-5 '> website Info</h1>
      <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"><i class="ri-fire-fill"></i> About</Link>
      <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5"><i class="ri-firefox-line"></i>Contact</Link>
      
      </nav>
    </div>
  ) 
}
 
export default Sidenav
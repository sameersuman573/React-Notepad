import Sidenav from "./Partials/Sidenav"
import Topnav from "./Partials/Topnav"

  
 const Home = () => {
    document.title = "Major-proj"
   return (

    <>
    <Sidenav/>
    <div className='w-[80%] max-h-full bg-red-300 '>
        <Topnav/>
    </div>
    </>



    )
 }
 

 export default Home
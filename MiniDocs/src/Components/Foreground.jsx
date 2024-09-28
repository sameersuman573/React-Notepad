import React from 'react'
import Card from './Card'


function Foreground() {

    const data = [
        {
            desc: "hello everybodu i am sameer suman i am a very dedicated student ",
            filesize: "1.2mb",
            close:true,
            tag: {isOpen:true , tagTitle:"Download Now", tagColor:"green"}
        },
    ]


  return (
<div className="fixed top-0 left-0 z-[3] w-full h-full flex gap-15  flex-wrap ">
 {data.map((item,index) => (
    <Card data={item} />
 ))} 
</div>  )
}

export default Foreground
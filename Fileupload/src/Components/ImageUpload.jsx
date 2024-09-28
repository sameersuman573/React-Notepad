import React, { useEffect, useState } from "react";
import { imagedb } from '../firebase';
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

function FirebaseImageUpload(){
    const [img,setImg] =useState('')
    const [imgUrl,setImgUrl] =useState([])

    const handleClick = () =>{
     if(img !==null){
        const imgRef =  ref(imagedb,`files/${v4()}`)
        uploadBytes(imgRef,img).then(value=>{
            console.log(value)
            getDownloadURL(value.ref).then(url=>{
                setImgUrl(data=>[...data,url])
            })
        })
     }
    }

 


    useEffect(()=>{
        listAll(ref(imagedb,"files")).then(imgs=>{
            console.log(imgs)
            imgs.items.forEach(val=>{
                getDownloadURL(val).then(url=>{
                    setImgUrl(data=>[...data,url])
                })
            })
        })
    },[])


    const handlefile = (e) => {
        setImg(e.target.files[0])
    }

    return(
        <div className="App">
                <input type="file" onChange={handlefile} /> 
                <button onClick={handleClick}>Upload</button>
                <br/>

 



                {
                    imgUrl.map( (dataVal , index)=>
                    <div key={index} >
                        <img src={dataVal} height="200px" width="200px" />
                        <br/> 
                    </div>)
                }
        </div>
    )
}
export default FirebaseImageUpload;
//  we will add a protection mechanism here
// we will make a container and then we will decide that values will be showed or not



import React, { useState, useEffect } from "react";
import {  useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



export default function Protected({ children , authentication = true }) {
    // In the authetication part someone could give value false also so we need to check auth status
  const navigate = useNavigate();
  const [loader, setloader] = useState(true);
  const authStatus = useSelector(state => state.auth.status);
// useselector will hep us to get the status of the user whether he is authenticated or not







//   useffect will tell  whether you want to go on login or somewhere esle
useEffect(() => {

    // 1 condition -- true &&  false != true so answer is true -- navigate("/") - authenticated
    // true and true


    //2 condtion -- flase && false!=false so answer is false  -- navigate("/login") - false user
    // false and false


// if (authstatus === true ) {
//     navigate("/")
// }
// else if (authstatus === false) {
//     navigate("/login")
// }



// decide all things based on authstatus
 if (authentication && authStatus !== authentication) {
    navigate("/login")
}
// authentication is false here
else if (!authentication && authStatus !== authentication){
navigate("/")
}





// on basis of setloader we will do loading or will display the children
setloader(true)
// dependecy array on which we are dependent if any things changes inside this attribute then this useeffect will run
},[authStatus,navigate,authentication])



  return  loader ? <h1>Loading...</h1> : <>{children}</>;
}













 
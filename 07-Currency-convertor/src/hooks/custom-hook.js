
// Custom hook is basically  a function written with the prefix called use to denote as a hook it can called with a functionality to make code more reusable
// It can encapsulate the basic hooks like usestate,useeffect
// use paramters to make it more usable
// return he values that are needed by component using the hook such as function to update any data
// The components can then call the custom hook within their functional components to access the shared logic and state.



import { useState } from "react";

function calculatecount(initialvalue = 0){

    // To display data we will use usestate

    const [count, setcount] = useState(initialvalue)

    const increment = () => {
        setcount(count+1);
    };

    const decrement = () => {
        setcount(count-1);
    };


    return {
        count,
        increment,
        decrement
    }

}

export default calculatecount;









// Now assume it is used by anyother component

// import calculatecount from "./customhook"
 function countercomponent() {
    const {count , increment, decremnt} = usecounter(0)
//

    return (
        <div>
            <p> countis: {count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decremnt}>-</button>
        </div>
    )

 }

//  export default countercomponent;
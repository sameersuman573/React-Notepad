
// 1.usecallback
// 2.useeffect
// 3.usememo
// 4. usestate
// 5.useref
 

// Diffreneces between usecallback and usememo
// Use Case:

const { func } = require("prop-types");
const { useCallback, useMemo } = require("react");

//  1.   useCallback: Typically used when you need to optimize performance by memoizing functions. It's often used in scenarios where you have a callback function that you don't want to recreate on every render, especially if that function is passed down to child components.
// If you provide dependencies, the effect will run whenever any of those dependencies change, 



const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]); // Dependency array

 
// const click = useCallback(() => {
// setcount(count + 2);
// }, [count] )





//  2.  useEffect: Used for managing side effects in functional components. It's commonly used for fetching data from APIs. 
//  useEffect allows you to separate side effect logic from the main rendering logic of your component.
// sideeffect such as loading , sidebar opening


 
function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);



useEffect(() => {
    fetch('URL')
    .then(response => response.json())
    .then(data => {
        setData(data);
        setLoading(false);
    })

.catch(error => console.error('error fetching') ) 
},[])



  if (loading) {
    return <div>Loading...</div>;
  }
}

 


// useEffect(() => {
// fetch('URL')
// .then(response => response.json())
// .then(data => {
//   setData(data);

// })
// }, [])











//  3.   useMemo: Used for memoizing expensive computations. It's similar to useCallback, but it's used for memoizing values instead of functions. useMemo is useful when you have a complex computation that you want to cache and reuse across renders. It's often used to optimize performance by avoiding unnecessary recalculations of values that haven't changed.


const result = useMemo(() => {
    console.log('Calculating...');
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += i;
    }
    return total;
  }, 
  [count]); // Dependency array

  return <div>Result: {result}</div>;



// const response = useMemo(() => {
//   // TO find the table
//   let total = 0;
//   for(let i = 0; i<navigator; i++){
//     total = 2*(i+1);
//   }
//   return total;
// },[count])
  





// 5. usestate

function counter(value = 0) {
  const [count, setcount] = useState(value)

  return(
    <div>
      <p>count:{count}</p>
      <button onClick={() => setcount(count+2)}> push code</button>
     </div>
  )
}






//   4. userefhook 
// Avoidance of Unnecessary Re-renders: Since changing the current property of a useRef object does not trigger re-renders, it can be used to store values that need to be updated frequently without causing unnecessary re-renders of the component.

// Access to DOM Elements: useRef allows for direct access to DOM elements, enabling imperative DOM manipulation within functional components. This is particularly useful for scenarios like focusing an input field, measuring the size of an element, or triggering animations.

// Access to Mutable Values: useRef can



function focusInput() {
  const inputref = useref(null);

  const handleclick = () => {
    inputref.current.focus();
  }



  return (
    <div>
    {/* useref hook => It allows you to access and intracts with these elements imperatevly which means you can directly manipulate them outside the typical react data flow */}
      <input type="text" ref={inputref}></input>
      <button onClick={handleClick}> Focus</button>
    </div>
    // By attaching the reference to the input feild using ref attribute we can access the input feild imperatively such as focussing it programitically when a button is clicked
  )


}

export default focusInput;





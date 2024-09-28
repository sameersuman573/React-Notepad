import React, { useId } from "react";

// you can choose the way to make like this or like input.jsx
function Select(
  {
    options,
    label,
    className = "",
    // if nothing is passed so let classname have empty string
    ...props
  },
  ref
)

{

  const id = useId();



  return (
    // we are making a form with select tag and we are using spread operator to get all the props from the parent component

    //select
    <div className="w-full">
      {/* if there is label then we will displat it */}
      {label && <label htmlFor={id} className=""></label>}


      {/* pass all the props given by the user */}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
      >
        {/* options - if we donot have values in options so it will crash . options gives us array if options is there then we will loop on it*/}

        {options?.map((option) => (
          <option key={option} 
           value={option}>
            {option}
          </option>
        ))}
        
      </select>
    </div>
  );
}

export default React.forwardRef(Select);

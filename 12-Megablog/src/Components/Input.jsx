import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
  //  whosoever wiil be using will have to use refrence
) {
  const id = useId();

  return (
    <div className="w-full">
      {/* label ------------------------------ */}

      {/* if label is passed so it will be displayed */}
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}

      {/* input --------------------------------*/}
      <input
        type={type}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        //   refrence is the props we took from user then we will take access of the state
        // refrence will be given to parent component
        ref={ref}
        {...props}
        id={id}

        // so the unique id is given to label and input field
      />
    </div>
  );
});


export default Input;

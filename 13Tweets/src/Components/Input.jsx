
import React, {useId} from "react";


const Input = React.forwardRef( function Input(

    // destructured values
    {
        label,
        type = "text",
        classname="",
        ...props
    },
    ref
)

{
const id = useId();

return (


    <div>

        {/* Label --------------- */}
        {label && (
            <label
             htmlFor={id}>
             {label}
            </label>
        )}



        <input 
        type={type}
        className={`$classname`}
        id={id}
        {...props}
        ref={ref}
        />
    </div>




)
}

)

export default Input






























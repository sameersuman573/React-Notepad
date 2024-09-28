import React, { useState } from "react";
// we need to manage state
// we need to have link so that faster login it would naviagte
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

 // changing name
import { Button, Input, Logo } from "./index";

// redux
import { login as authlogin } from "../Store/authSlice";
import {  useDispatch } from "react-redux";

import authservice from "../Appwrite/auth";
// react form
import { useForm } from "react-hook-form";





// IN THIS WE ARE DOING THE WORK OF CHECKING THE login AND MAKING THE FORM AND PAGE FOR LOGIN



 

function Login() {
    // navigate - allow developers to define routes and navigate between different views or components without causing a full page reload. Navigation functions allow developers to trigger navigation actions in response to events or state changes in the application.
  const navigate = useNavigate();
 
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  // LEARN ABOUT USEFORM - it is a hook which is used to make forms in react
  const [error, setError] = useState("");





  const login = async(data) => {
    // Make all the login and register like this only ------------------------------
    // whenever you make login or register form then do the errors empty out to clean the error
    setError("");
    


    try {
        // send data to login
      const session = await authservice.login(data);

    //   based on response if you have got the session then your are logged in so fetch userdata
      if (session) {
        const userdata = await authservice.getCurrentUser();

        // if we have userdata then dispatch it - if we have userdata then only login will be called up
        // if you are doing login so status will be true 



        // refer to auth slice
        // if we are calling data status will be true and here we are doing checking if we have userdata then only we will dispatch it
        if (userdata) {
          dispatch(authlogin(userdata));
          navigate("/");
        }
      }

    } catch (error) {
        // saving the error message in state
      setError(error.message);
    }
  };





  return (



    <div className="flex items-center justify-center w-full">

      <div
        className={
          "mx-auto w-full max-w-lg bg-gray-100 roundexl p-10 border-black/10"
        }
      >



      {/*LOGO DIV */}
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px">
            <Logo width="100%"></Logo>
          </span>
        </div>



        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your Account
        </h2>



{/* don't have an account so signup */}
        <p className="mt-2 text-center text-base text-black/60">
          <Link

            to="/signup"

            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign UP
          </Link>
        </p>



{/* if we have error then display it use && method to do this */}
        {error && 
        <p className="text-red-500 mt-8 text-center">{error}
        </p>}




        {/*        -----------FORM--------------      */}







{/* we are making a form for log in */}





{/* handle submit is a method in itself because it comes from useform*/}

        <form
         onSubmit={handleSubmit(login)} 
         className="mt-8">
          {/*handlesumbit is a method in which we give our method to handle this form it will be always used whenever form will be used it is an event */}

          <div className="space-y-5">




{/* 1 INPUT */}
            <Input
              label="email"
              placeholder="enter your email"
              type="email"



            // the reason for writing... is that if you use register without writing ... in any other of the input then register value will be overridden
            // so always spread the values its is the syntax
            // using spread operator we extract all values it is compulsory - due to useform

            // In the context of React forms, "register" typically refers to the process of connecting an HTML form input element to the form library's state management system. 
            // When you "register" an input field, you're essentially telling the form library to track its value, validation rules, and other relevant properties. This allows the form library to manage the state of the form inputs and handle user interactions effectively.
              {...register("email", {
                // give unique values
                required: true,
                validate: {
                  // Regex - regular expression
                  matchPattern: (value) =>
                    /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) ||
                    "email address must be a valid address",
                }
              })}
            />

 

{/* 2 INPUT */}


            <Input 
                label="password" 
                type="password"
                placeholder="Enter your Password"
                {...register("password",{ required:true,})}
                />


{/* So here it has utilized the component button using Forward refrence hook */}


                <Button 
                type="submit"
                className="w-full"
                >Sign In
                </Button>



           </div>
        </form>
      </div>
    </div>
  );
}


export default Login;








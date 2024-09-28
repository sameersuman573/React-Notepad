import React from "react";
import { useState } from "react";
import authservice from "../Appwrite/auth";
import login from "./Login";
import { Button, Input, Logo } from "./index";

// redux
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";



function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();


  
  const create = async (data) => {
    setError("");
    // empty out all errors
    try {
      // we will create an account so we wiil call the function form auth
      // we will fetch the data
      const userdata = await authservice.createAccount(data);

      // if we got the data the we will authenticate
      if (userdata) {
        const userdata = await authservice.getCurrentUser();

        if (userdata) {
          // update the store
          dispatch(login(userdata));
          // if userdata is passed then do the navigation
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    // page

    <div className="flex items-center justify-center">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        {/* logo */}
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px">
            <Logo width="100%"></Logo>
          </span>
        </div>

        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign up to create account
        </h2>

        <p className="mt-2 text-center text-base text-black/60">
          Already have an account
          <Link
            // path
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            {" "}
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        {/*    -------------- FORM---------------- SIGNUP*/}

        <form onSubmit={handleSubmit(create)}>
          {/* handlesubmit is a method to get data */}

          <div className="space-y-5">
            <Input
              label="full name"
              placeholder="enter you full name"
              //write this  syntax always  like this as register is written
              {...register("name", {
                required: true,
              })}
            />

            <Input
              label="email"
              placeholder="enter your email"
              type="email"
              // the reason for writing... is that if you use register in any other of the input then register value will be overridden
              // using spread operator we extract all values
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) ||
                    "email address must be a valid address",
                },
              })}
            />

            <Input
              label="password"
              type="password"
              placeholder="enter your password"
              {...register("password", {
                required: true,
              })}
            ></Input>

            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
// export default Signup;

// // creating a sigup page
// import React from "react";
// import authSlice from "../Store/authSlice";
// import { Button,Input,Logo } from "./index";
// import {navigate} from "./usenavigate"
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import {useDispatch} from "./Authlayout"
// import { AuthService } from "../Appwrite/auth";

// function signupp {

//  const dispatch = useDispatch()
//  const [register , handlesubmit] = useForm()
//  const [error, seterror] = useState('')
//  const naviagte = useNavigate()

// const create = async(data) => {
// seterror('')

// try {
//   // create accoun

//   const userdata = AuthService.createAccount(data)

//   // After recieving the data fetching the current user details
//   if(userdata) {
//     const userdata = AuthService.getCurrentUser()

//     // after getting current user we will authenticate him/her and make them login
//     if(userdata){
//       dispatch(login(userdata))
//       navigate('/')
//     }
//   }
// } catch (error) {
//   console.log("error");
// }
// }

// return (

// // Basic
// <div>
// <Logo></Logo>
// <Link to={'signin'}>sign in</Link>

// <div>

// {/* forms */}

// <div>
// <form onSubmit={handlesubmit(create)}>

// <Input
//  label="name"
//  placeholder="write your name"
//  {...register,("username",{
//   required:true
//  })}
// >
// </Input>

// <Input
// label="email"
// placeholder="write your email"
// {...register,("email",{
//   required:true
//   validate:{matchPattern: (value)=>
//   }
// })}>

// </Input>

// <Input
// label="password"
// placeholder="write your password"
// {...register,("password",{
//   required:true
// })}>

// </Input>

// </form>
// </div>

// </div>

// </div>
// )

// }

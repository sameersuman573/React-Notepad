import React from 'react'
import { AuthService } from '../Appwrite/auth'
import {useDispatch} from "react-redux"
 import {useNavigate} from "react-router-dom"
 import {login} from "../Store/authSlice"
 import { Logo } from './Logos'
 import { Button, Input, Logo } from "./index";

function Login() {
    const [loading, setloading] = useState(false);
    const naviagte = useNavigate();
    const dispatch = useDispatch();

    const{register , handleSubmit}= useForm();



    // to login we must have a function
    const login = async(data) => {
        try {
            // First we wiil make it login
            const session = AuthService.login(data)
            // Then we will try to get currenuser
            if(session){
                // whenever fetching the userdata always use await
                const userdata =  await AuthService.getCurrentUser(data)
            }

            if(userdata){
                dispatch(login(data));
                naviagte('/');
            }
            
        } catch (error) {
            console.log("error in login", error);
        }
    }

  return (

    <div>

<div>
    <Logo/>
</div>

<Link to={`/signup`}>
<p>Signup</p>
</Link>

        <div>
<form onSubmit={handleSubmit(login)}>
<div>
    <Input
        label="email"
        placeholder="email"
        type="email"
        {...register("email",{
            required:true,
            validate:{
                matchPattern: (value) => 
                /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) ||
                    "email address must be a valid address",
            }
        })}
    />



    <Input 
        label="password"
        placeholder="password"
        type="password"

        {...register("password",{
            required:true,

        })}
    />


    <Button 
        type='submit'
        placeholder="sign in"
    />
</div>


</form>
        </div>

    </div>
  )
}

export default Login
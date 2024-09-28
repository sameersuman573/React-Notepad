
import React from 'react'
import { useDispatch } from 'react-redux'
import Button from './Button'
import { AuthService } from '../Appwrite/auth'





function Signup() {
  const naviagte = useNavigate()
  const dispatch = useDispatch()
  const [loading, setloading] = useState(false)
  const {register,handleSubmit} = useForm()


  const create = async(data) =>{
    try {
      const userdata =  await AuthService.createAccount(data)
      if(userdata){
       const userdata =  await AuthService.getCurrentUser()
      }

      if(userdata){
        dispatch(login(data))
        naviagte('/')
      }

    } catch (error) {
      
    }
  }

  return (
    <div>
        <form onSubmit={handleSubmit(create)}>


            <Input 
                label="username"
                placeholder="username"
                {...register,("username",{
                  required:true
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
            placeholder="password"
            {...register,("password",{
              required:true
            })}
            />


            <Button type='submit'>
             sign up
            </Button>





        </form>
    </div>
  )
}

export default Signup
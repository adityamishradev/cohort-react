import { nanoid } from "nanoid"
import React from "react"
import { useForm } from "react-hook-form" 
import { Link } from "react-router-dom"

const Login = () => {
  const { register, handleSubmit } = useForm()
  const LoginHandler = (user) => {
    user.id = nanoid();
    console.log(user);
  }
  return (
   <form onSubmit={handleSubmit(LoginHandler)} className="w-full p-5">
          
             <input
                {...register("email")}
                className="w-full text-3xl mb-5 p-2 border-b outline-0"
                type="email"
                placeholder="email"
            />
            <input
                {...register("password")}
                className="w-full text-3xl mb-5 p-2 border-b outline-0"
                type="password"
                placeholder="********"
            />
            <button className="text-white rounded mt-5 text-3xl px-5 py-3 bg-red-400">
                Signin User
            </button>
            <p className="mt-3">
                Don't have an account?{" "}
                <Link className="text-blue-400" to="/register">
                  Register
                </Link>
            </p>
        </form>
  )
}

export default Login
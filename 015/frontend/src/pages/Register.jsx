import { nanoid } from "nanoid"
import { useForm } from "react-hook-form" 
import { Link } from "react-router-dom"

const  Register = () => {
  const { register, handleSubmit } = useForm()
  const RegisterHandler = (user) => {
   
    console.log(user);
  }
  return (
   <form onSubmit={handleSubmit(RegisterHandler)} className="w-full p-5">
            <input
                {...register("name")}
                className="w-full text-3xl mb-5 p-2 border-b outline-0"
                type="text"
                placeholder="john@doe.doe"
            />
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
                Registere User
            </button>
            <p className="mt-3">
            Already  have an account?{" "}
                <Link className="text-blue-400" to="/login">
                  Login
                </Link>
            </p>
        </form>
  )
}

export default Register
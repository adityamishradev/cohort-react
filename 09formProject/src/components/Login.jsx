import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (
      user &&
      user.email === data.email &&
      user.password === data.password
    ) {
      localStorage.setItem("isAuth", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Login</h2>

      <input {...register("email")} placeholder="Email" />
      <input {...register("password")} type="password" placeholder="Password" />

      <button>Login</button>
    </form>
  );
}

export default Login;

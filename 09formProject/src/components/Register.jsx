import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Register() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    alert("Register Successful");
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Register</h2>

      <input {...register("name")} placeholder="Name" />
      <input {...register("email")} placeholder="Email" />
      <input {...register("password")} type="password" placeholder="Password" />

      <button>Register</button>
    </form>
  );
}

export default Register;

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const submit = async () => {
    await axios.post("http://localhost:5000/api/auth/register", form);
    navigate("/login");
  };

  return (
    <>
      <h2>Register</h2>
      <input placeholder="Name" onChange={e => setForm({...form, name:e.target.value})}/>
      <input placeholder="Email" onChange={e => setForm({...form, email:e.target.value})}/>
      <input placeholder="Password" type="password" onChange={e => setForm({...form, password:e.target.value})}/>
      <button onClick={submit}>Register</button>
    </>
  );
}

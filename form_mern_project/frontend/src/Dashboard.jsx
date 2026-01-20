import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    axios.get("http://localhost:5000/api/auth/dashboard", {
      headers: { Authorization: token }
    }).catch(() => {
      navigate("/login");
    });
  }, []);

  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={() => {
        localStorage.removeItem("token");
        navigate("/login");
      }}>
        Logout
      </button>
    </>
  );
}

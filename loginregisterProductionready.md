# BIG PICTURE (PEHLE YE SAMJHO)

```
Production React App mein flow aisa hota hai:

User Login / Register karta hai

Backend se token / user data aata hai

Token ko localStorage mein save karte hain

Context API poore app ko batata hai → user logged in hai

Page refresh ho jaaye → localStorage se user wapas load ho jaata hai

Logout → localStorage clear + context reset

```
##🧠 STEP 0: Folder Structure (Production Style)
```
src/
│── context/
│    └── AuthContext.jsx
│
│── pages/
│    ├── Login.jsx
│    ├── Register.jsx
│    └── Dashboard.jsx
│
│── services/
│    └── api.js
│
│── App.jsx
│── main.jsx
```
### STEP 1: Axios Instance (services/api.js)

👉 Production mein direct axios call nahi karte

👉 Ek central axios file banate hain

```
// src/services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export default api;
```
###🔹 STEP 2: AuthContext Create Karna
src/context/AuthContext.jsx
```
import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ PAGE REFRESH PE LOCALSTORAGE CHECK
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    setLoading(false);
  }, []);

  // 🔐 LOGIN FUNCTION
  const login = async (data) => {
    const res = await api.post("/auth/login", data);

    // backend se token + user aaya
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));

    setUser(res.data.user);
  };

  // 📝 REGISTER FUNCTION
  const register = async (data) => {
    await api.post("/auth/register", data);
  };

  // 🚪 LOGOUT
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
export const useAuth = () => useContext(AuthContext);
```
### 🔹 STEP 3: App ko AuthProvider se Wrap Karna
src/main.jsx
```
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
```
### 🔹 STEP 4: Login Page
src/pages/Login.jsx
```
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(form);
      navigate("/dashboard");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Email"
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />
      <button>Login</button>
    </form>
  );
};

export default Login;
```
### 🔹 STEP 5: Register Page
```
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(form);
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" />
      <input placeholder="Email" />
      <input placeholder="Password" />
      <button>Register</button>
    </form>
  );
};

export default Register;
```
### 🔹 STEP 6: Dashboard (Protected UI)
```
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Welcome {user?.name}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
```
### 🔐 STEP 7: TOKEN API KE SAATH SEND KARNA (Production)
api.js update

```
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
```

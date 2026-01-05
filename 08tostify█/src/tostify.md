# 🔔 React Toastify – Notifications in React

React Toastify ek popular React library hai jo **toast notifications** (success, error, warning, info) dikhane ke liye use hoti hai.

---

## 📦 Installation

Project ke root folder me ye command run karo:

```bash
npm install react-toastify
```
⚙️ Setup (Important Step)
Add ToastContainer (Only Once)

ToastContainer ko sirf ek baar add karna hota hai, mostly App.jsx me.

```
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Home";

function App() {
  return (
    <>
      <Home />
      <ToastContainer />
    </>
  );
}

export default App;
```

🚀 How to Use Toast
Toast Call Example

```
import React from "react";
import { toast } from "react-toastify";

const Home = () => {
  return (
    <div>
      <button onClick={() => toast.success("Success Message!")}>
        Success Toast
      </button>

      <button onClick={() => toast.error("Error Message!")}>
        Error Toast
      </button>

      <button onClick={() => toast.warning("Warning Message!")}>
        Warning Toast
      </button>

      <button onClick={() => toast.info("Info Message!")}>
        Info Toast
      </button>
    </div>
  );
};

export default Home;
```
🧩 Toast Types
```
toast("Normal Toast");
toast.success("Success Toast");
toast.error("Error Toast");
toast.warning("Warning Toast");
toast.info("Info Toast");

```
🎨 Custom Toast Options
```
toast.success("Data Saved Successfully!", {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
});
```
Common Options
Option	Description
--
position |	top-right, top-left, bottom-center
--
autoClose	|Time in milliseconds
-
theme	light / dark / colored


# 🌙 Dark Theme Toast
```
<ToastContainer theme="dark" />
```
### 🧠 Real-Life Example (Form Validation)
```
const handleSubmit = () => {
  if (!email) {
    toast.error("Email is required!");
    return;
  }

  toast.success("Form Submitted Successfully!");
};
```

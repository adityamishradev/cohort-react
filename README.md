# React Project Folder Structure (Beginner Friendly)

This document explains a **standard React project folder structure** using **easy Hinglish**, suitable for beginners and MERN stack learners.

---

## 📁 Root Level Structure

```
my-react-app/
│
├── node_modules/
├── public/
│   ├── index.html
│   └── favicon.ico
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── layouts/
│   ├── routes/
│   ├── services/
│   ├── context/
│   ├── hooks/
│   ├── utils/
│   ├── styles/
│   │
│   ├── App.jsx
│   ├── main.jsx (or index.js)
│   └── App.css
│
├── .gitignore
├── package.json
└── README.md
```

---

## 📦 node_modules/

* Saare npm packages yahin install hote hain
* React, react-router-dom, axios, etc.

❌ Is folder ko manually edit nahi karte
❌ GitHub pe upload nahi karte

---

## 🌍 public/

### index.html

```html
<div id="root"></div>
```

* React app isi `root` div ke andar render hoti hai
* React **Single Page Application (SPA)** hoti hai

---

## ⚛️ src/ (Most Important Folder)

Yahin par actual React development hota hai.

---

## 🖼️ assets/

* Images
* Icons
* Videos

```
assets/
 ├── logo.png
 └── banner.jpg
```

Usage:

```js
import logo from "../assets/logo.png";
```

---

## 🧩 components/

* Reusable UI parts

```
components/
 ├── Navbar.jsx
 ├── Footer.jsx
 └── Button.jsx
```

Example:

```jsx
function Button() {
  return <button>Click Me</button>;
}
```

---

## 📄 pages/

* Complete pages / screens
* Routes se linked hote hain

```
pages/
 ├── Home.jsx
 ├── Login.jsx
 └── Dashboard.jsx
```

### Component vs Page

| Component | Page        |
| --------- | ----------- |
| Reusable  | Route based |
| Small UI  | Full screen |

---

## 🧱 layouts/

* Common layout structure (Navbar + Footer)

```
layouts/
 └── MainLayout.jsx
```

Example:

```jsx
<>
  <Navbar />
  <Outlet />
  <Footer />
</>
```

---

## 🛣️ routes/

* React Router configuration

```
routes/
 └── AppRoutes.jsx
```

Example:

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
</Routes>
```

---

## 🌐 services/

* Backend API calls

```
services/
 └── api.js
```

Example:

```js
import axios from "axios";

export const loginUser = (data) =>
  axios.post("/api/login", data);
```

---

## 🧠 context/

* Global state management
* Auth, Cart, Theme, etc.

```
context/
 └── AuthContext.jsx
```

---

## 🪝 hooks/

* Custom React hooks

```
hooks/
 └── useAuth.js
```

---

## 🧰 utils/

* Helper / utility functions

```
utils/
 └── formatDate.js
```

---

## 🎨 styles/

* CSS / SCSS files

```
styles/
 └── main.css
```

---

## 🚀 App.jsx

* Root component
* Routes aur layouts yahin load hote hain

```jsx
function App() {
  return <AppRoutes />;
}
```

---

## ⚡ main.jsx / index.js

* Entry point of React app

```js
ReactDOM.createRoot(document.getElementById("root"))
  .render(<App />);
```

---

## 📦 package.json

* Project dependencies
* Scripts
* Project metadata

---

## 🧠 Interview Tip

**Q:** React project structure kyun important hai?

* Clean code
* Easy scalability
* Team collaboration
* Easy debugging

---

## ✅ Recommended Production Structure

```
src/
 ├── components/
 ├── pages/
 ├── services/
 ├── context/
 ├── hooks/
 ├── routes/
 └── utils/
```

---

**Author:** Aditya Mishra
**Stack:** React / MERN
**Language:** Hinglish

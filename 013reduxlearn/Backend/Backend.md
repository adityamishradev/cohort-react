# JSON Server – Complete Guide for React Developers

## 📌 What is JSON Server?

JSON Server ek **fake REST API tool** hai jo **JSON file** se poora backend simulate karta hai.

👉 Matlab bina real backend (Node, Express, DB) likhe:

* GET
* POST
* PUT
* PATCH
* DELETE

sab APIs mil jati hain.

Ye React developers ke liye **bohot useful** hai jab:

* Backend ready nahi ho
* Frontend practice karni ho
* CRUD apps banana ho

---

## 🤔 Why React Developers Use JSON Server?

### 🔹 Reasons:

* Backend likhne ki zarurat nahi
* Fast setup (2–5 minutes)
* Real API jaisa behavior
* CRUD practice ke liye best
* Interviews & demos ke liye useful

### 🔹 Real-life Example:

Socho tum **React Todo App** bana rahe ho:

* Backend abhi nahi bana
* Tumhe API chahiye

➡️ JSON Server tumhara **temporary backend** ban jata hai.

---

## 🛠️ Installation (Step-by-Step)

### ✅ Step 1: Node.js Check

Terminal me check karo:

```bash
node -v
npm -v
```

Agar install nahi hai → pehle Node.js install karo.

---

### ✅ Step 2: JSON Server Install

#### Option 1: Global Install (Recommended)

```bash
npm install -g json-server
```

#### Option 2: Project-wise Install

```bash
npm install json-server --save-dev
```

---

## 📂 Step 3: Create `db.json`

Project folder me file banao:

```text
db.json
```

### Example:

```json
{
  "users": [
    {
      "id": 1,
      "name": "Aditya",
      "email": "aditya@gmail.com"
    }
  ],
  "todos": [
    {
      "id": 1,
      "title": "Learn React",
      "completed": false
    }
  ]
}
```

---

## ▶️ Step 4: Start JSON Server

```bash
json-server --watch db.json --port 5000
```

### Output:

```text
Resources
http://localhost:5000/users
http://localhost:5000/todos
```

🎉 Tumhara fake backend ready!

---

## 🌐 Available APIs Automatically

| Method | URL      | Use             |
| ------ | -------- | --------------- |
| GET    | /todos   | Get all todos   |
| GET    | /todos/1 | Get single todo |
| POST   | /todos   | Add todo        |
| PUT    | /todos/1 | Update todo     |
| PATCH  | /todos/1 | Partial update  |
| DELETE | /todos/1 | Delete todo     |

---

## ⚛️ React me JSON Server Use Karna

### Step 5: Axios Install

```bash
npm install axios
```

---

### Step 6: GET Data (Read)

```js
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/todos")
      .then(res => setTodos(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default App;
```

---

### ➕ POST Data (Create)

```js
axios.post("http://localhost:5000/todos", {
  title: "Learn JSON Server",
  completed: false
});
```

---

### ✏️ PUT / PATCH (Update)

```js
axios.patch("http://localhost:5000/todos/1", {
  completed: true
});
```

---

### ❌ DELETE Data

```js
axios.delete("http://localhost:5000/todos/1");
```

---

## 🔥 Advanced Tips

### 🔹 Auto Increment ID

JSON Server automatically `id` generate karta hai.

### 🔹 Query Params

```text
/todos?completed=true
```

### 🔹 Search

```text
/todos?q=react
```

### 🔹 Pagination

```text
/todos?_page=1&_limit=5
```

---

## 🚫 Limitations

❌ Authentication nahi hota
❌ Real database nahi
❌ Production ke liye use nahi hota

➡️ **Sirf learning & frontend dev ke liye**

---

## 🎯 When NOT to Use JSON Server

* Production apps
* Secure data
* Real-time apps

---

## ✅ Summary

* JSON Server = Fake REST API
* React developers ke liye best practice tool
* CRUD apps banana easy
* Backend ke bina frontend develop kar sakte ho

---

## 📌 Next Suggestion

Agar chaho to main bana sakta hoon:

* React CRUD Todo App (JSON Server)
* Login/Register demo (fake auth)
* Portfolio project backend simulation

👉 Batao kya banana hai 😊

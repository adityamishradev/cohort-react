import { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  // ADD & UPDATE
  const handleAdd = () => {
    if (!todo) return;

    if (editId) {
      // UPDATE
      setTodos(
        todos.map(item =>
          item.id === editId ? { ...item, text: todo } : item
        )
      );
      setEditId(null);
    } else {
      // ADD
      setTodos([...todos, { id: Date.now(), text: todo }]);
    }

    setTodo("");
  };

  // DELETE
  const handleDelete = (id) => {
    setTodos(todos.filter(item => item.id !== id));
  };

  // EDIT
  const handleEdit = (item) => {
    setTodo(item.text);
    setEditId(item.id);
  };

  return (
    <div>
      <h2>Todo App</h2>

      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter todo"
      />

      <button onClick={handleAdd}>
        {editId ? "Update" : "Add"}
      </button>

      <ul>
        {todos.map(item => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

import { useState } from "react";

const TodoCreate = ({ addTodo }) => {
  const [text, setText] = useState("");

  const submitHandler = () => {
    if (!text) return;
    addTodo(text);
    setText("");
  };

  return (
    <div>
      <input 
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={submitHandler}>Add</button>
    </div>
  );
};

export default TodoCreate;

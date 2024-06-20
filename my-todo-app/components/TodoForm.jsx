import React, { useEffect, useState } from "react";

const TodoForm = () => {
  const [formData, setFormData] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setFormData(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.trim()) {
      setTodos([...todos, formData]);
      setFormData("");
    }
  };

  useEffect(() => {
    console.log("Todos updated", todos);
  }, [todos]);

  useEffect(() => {
    console.log("Form data updated", formData);
  }, [formData]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Input Field:
          <input type="text" onChange={handleInputChange} value={formData} />
        </label>
        <button type="submit">+ Add Task</button>
      </form>
      <h3>Task List</h3>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoForm;

import React, { useState } from "react";
import TodoTable from "./TodoTable";

function Todolist() {
  const [todo, setTodo] = useState({
    description: "",
    date: ""
  });
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setTodo({
      ...todo,
      [e.target.name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([todo, ...todos])
    //reset input
    setTodo({description: "", date: ""})
    
  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Description
          <input
            type="text"
            name="description"
            value={todo.description}
            onChange={handleChange}
          />
        </label>

        <label>
          Date
          <input
            type="date"
            name="date"
            value={todo.date}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Add ToDo" />
      </form>
    <TodoTable todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default Todolist;

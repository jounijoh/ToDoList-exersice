import React, { useState } from "react";

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

  const handleDelete = (index, e) => {
    console.log(index)
    setTodos(todos.filter((todo, i) => i !== index));
    
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

      <table>
        <thead>
          <tr>
           <th> Description</th><th> Date</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.description}</td><td>{todo.date}</td><td><button onClick={e => handleDelete(index, e)}> Delete </button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Todolist;

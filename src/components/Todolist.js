import React, { useState, useRef } from "react";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component

import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-material.css"; // Optional theme CSS

function Todolist() {
  const [todo, setTodo] = useState({
    description: "",
    date: "",
    priority: "",
  });
  const [todos, setTodos] = useState([]);
  const gridRef = useRef();

  const [columnDefs] = useState([
    { field: "description", sortable: true, filter: true, floatingFilter: true },
    { field: "date",sortable: true, filter: true, floatingFilter: true },
    { field: "priority", sortable: true, filter: true,
      cellStyle: params => params.value === "High" ? {color: "red"} : {color: "black"}, floatingFilter: true }
  ]);

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setTodo({
      ...todo,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([todo, ...todos]);
    //reset input
    setTodo({ description: "", date: "" , priority: ""});
  };

  const deleteTodo = () => {
    if (gridRef.current.getSelectedNodes().length > 0)
      setTodos(todos.filter((todo, index) => 
      index !== gridRef.current.getSelectedNodes()[0].childIndex));
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <label>
  
          <input
            placeholder="Description"
            type="text"
            name="description"
            value={todo.description}
            onChange={handleChange}
          />
        </label>

        <label>
        
          <input
            placeholder="Date"
            type="date"
            name="date"
            value={todo.date}
            onChange={handleChange}
          />
        </label>
        <label>
          
          <input
            placeholder="Priority"
            type="text"
            name="priority"
            value={todo.priority}
            onChange={handleChange}
          />
        </label>

        <input type="submit" value="Add ToDo" />
        
      </form>
      <button onClick={deleteTodo}>Delete</button> 
      
      <div className="ag-theme-material" style={{margin: "auto", width: "60%", height: 600}}>
        <AgGridReact 
          ref={gridRef}
          onGridReady= { params => gridRef.current = params.api }
          rowSelection="single"
          rowData={todos}
          columnDefs={columnDefs}
          animateRows={true}
        />
      </div>
    </div>
  );
}

export default Todolist;

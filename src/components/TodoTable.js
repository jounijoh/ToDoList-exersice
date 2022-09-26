import React from "react";

function TodoTable(props){

    const handleDelete = (index, e) => {
        console.log(index)
        console.log(props.todos)
        props.setTodos(props.todos.filter((todo, i) => i !== index));
        
        
      };

    return(
        <>
        
      <table>
        <thead>
          <tr>
           <th> Description</th><th> Date</th>
          </tr>
        </thead>
        <tbody>
          {props.todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.description}</td><td>{todo.date}</td>
              <td><button onClick={e => handleDelete(index, e)}> Delete </button></td>
            </tr>
          ))}
        </tbody>
      </table>
        </>
    )
}
export default TodoTable;
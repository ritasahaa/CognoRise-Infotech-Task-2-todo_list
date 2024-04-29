import { useState } from "react"

const Todo = () => {
  let [todos,setTodos]=useState(["sample task"]);
  let [newTodo,setNewTodo]=useState("");

  let updateTodoValue = (e) =>{
     setNewTodo(e.target.value);
    }
    
    let addNewTask = () =>{
      setTodos([...todos,newTodo]);
      setNewTodo([]);
  }

  return (
    <div>
      <input 
      placeholder="Add a task"
      value={newTodo}
      onChange={updateTodoValue}
      />
      <button onClick={addNewTask}>Add</button>
      <br/> <br/> <br/>
      <hr/>
      <h4>Todo List</h4>

      <ul>
        {
          todos.map((todo)=>(
            <li>{todo}</li>

          ))
        }
      </ul>
    </div>
  )
}

export default Todo
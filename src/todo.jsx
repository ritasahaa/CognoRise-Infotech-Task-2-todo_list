import { useState } from "react";
import styled from 'styled-components';

// Create a styled div component
const Container=styled.div`
  background-color: #e44b4b;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  
`

const StyledDiv = styled.div`
   width: 400px;
   background-color: #fff;
   padding: 1rem 3rem;
  h4{
    margin-top: 3rem;
    text-align: center;
  }

  h2{
    margin: 1rem;
  }

  h2 span i{
    color: yellow;
  }

  img{
    width: 30%;
    height: 65px;
    /* this two line of code make theimage to center */
    margin: auto;
    display: block;
  }

  span{
    color: #b6b610;
  }

  input{
    padding: 0.5rem;
    font-size: 1rem;
    outline: none;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button{
    padding: .5rem 2rem;
    margin-left: 1rem;
  }

  li{
    display: flex;
    justify-content: space-between;
    background-color: green;
    margin-top: 1rem;
    list-style-type: none;
    padding: .7rem 1rem;
  }

  i{
    color: #674f4f;
  }
`

const Span=styled.span`
  position: relative;
  right: 1.7rem;
`





const Todo = () => {
  let [todos, setTodos] = useState(["sample task"]);
  let [newTodo, setNewTodo] = useState("");

  let updateTodoValue = (e) => {
    setNewTodo(e.target.value);
  }

  let addNewTask = () => {
    setTodos([...todos, newTodo]);
    setNewTodo([]);
  }

  const deleteTask = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  }

  return (
    <Container>

      <StyledDiv>
        <img src="/images/icon.png" />
        <h2>Add your list here <span><i className="fa-regular fa-hand-peace"></i></span></h2>
        <input
          placeholder="Add a task"
          value={newTodo}
          onChange={updateTodoValue}

        />

        <Span> <i className="fa-solid fa-plus" onClick={addNewTask}></i> </Span>
        {/* <button onClick={addNewTask}>Add</button> */}
        <br /> <br /> <br />
        <hr />
        <h4>Todo List</h4>

        <ul>
          {
            todos.map((todo,index) => (
              <li key={index}>
                {todo}
                <i className="fa-solid fa-trash-can" onClick={()=>deleteTask(index)}></i>
              </li>

            ))
          }
        </ul>
      </StyledDiv>
    </Container>
  )
}

export default Todo
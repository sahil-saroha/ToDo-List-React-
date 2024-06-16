import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
export default function ToDo() {
  const [todos, setTodos] = useState([{ task: "Sample Task", id: uuidv4(), isDone: false }]);
  const [newToDo, setNewToDo] = useState("");
  let showSamp = ()=>{
    console.log(samp)
  }

  const addNewToDo = () => {
    setTodos((prevTodos) => [...prevTodos, { task: newToDo, id: uuidv4(), isDone: false }]);
    setNewToDo("");
  };

  const updateToDoValue = (event) => {
    setNewToDo(event.target.value);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

 let upperCaseAll = ()=>{
  setTodos((prev)=>{

    return prev.map((todo)=>{
      return {
        ...todo,
        isDone: true
      }
     })
  })
 
 }
 let indiUpperCase = (id)=>{
  setTodos((prev)=>{

    return prev.map((todo)=>{
      if(todo.id==id){
      return {
        ...todo,
        isDone: true
      }
      }else{
        return {
          ...todo
        }
      }
      
     })
  })

 }


const todoItemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 10px',
};
 const lineThroughStyle = {
    textDecoration: 'line-through',
    color: 'black' 
  };

  const todoTaskStyle = {
    color: 'seagreen',
    fontWeight: 'bold'
  };
  return (

    <div>
    
      <h1 style={{color:"seagreen"}}>To-Do List</h1>
      <input
        placeholder="Add a task"
        value={newToDo}
        onChange={updateToDoValue}
      />
      <button onClick={addNewToDo}>Add Task</button>
      <ul>
        {todos.map((todo) => (
          <li style={todoItemStyle} key={todo.id}>
          
           {
           todo.isDone?  (<span style={lineThroughStyle}>{todo.task}</span>)
               :  (<span style={todoTaskStyle}>{todo.task}</span>)
           }
  
            <button style={{marginLeft:'10px', marginRight:'10px'}} onClick={()=> {indiUpperCase(todo.id)}}>Mark as Done</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <br />
      <br />
      <button onClick={upperCaseAll}>Mark-Done-All</button>
    </div>
  );
}
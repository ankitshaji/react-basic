//import React + useState hook + useRef hook + useEffect hook
import React, { useState, useRef, useEffect } from "react";
//import ToDoList component js file function
import ToDoList from "./ToDoList";
//import npm uuid library
import { v4 as uuidv4 } from "uuid";

//local storage key
const LOCAL_STORAGE_KEY = "todoApp.todos";
//App component
function App() {
  //usestate function returns array,default empty[]
  //destructure object - [all todos, function to update todos]
  const [todos, setTodos] = useState([]); //Object destructure

  //userRef - reference elements in html -ie input - create variable{toDoNameRef}
  const toDoNameRef = useRef();

  //useEffect function - retrieve todos array after refresh - part 2
  //load todos when todos is empty after refresh
  //(function that does something when change occurs, array with things that can change)
  useEffect(() => {
    const storedToDos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)); //json string to object array
    //if todos was not empty
    if (storedToDos) setTodos(storedToDos);
  }, []);

  //useEffect function - save todos array when refreshed - part 1
  //(function that does something when change occurs, array with things that can change)
  useEffect(() => {
    //save todos in localstorage - needs (key, value)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos)); //object array to json string
  }, [todos]);

  //function to toggle complete property of todo
  function toggleToDo(id) {
    //copy of todos - dont modify state variable direct
    const newTodos = [...todos];
    //find the todo to toggle with id
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete; //toggle the property
    //Update todos with toggled todo
    setTodos(newTodos);
  }

  //button onclick event handler function
  function handleAddToDo(e) {
    //element currently referencing -ie input
    const name = toDoNameRef.current.value;
    //input error check
    if (name === "") return;
    //usestate function -prevTodos object array values concat with new todo
    //return the new prevTodos object array - todos array updated
    setTodos((prevTodos) => {
      //uuidv4 creates random ids
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    //clear for next
    toDoNameRef.current.value = null;
  }

  //button onclick event handler function
  //to clear todos that have complete checked
  function handleClearToDos(){
    //if complete true - add to newTodos
    const newTodos = todos.filter(todo=>!todo.complete);
    //update todos object array without checked comeple todos
    setTodos(newTodos);
  }

  return (
    //Empty tag to combine return 2 things
    <>
      {/* create component ToDoList */}
      {/* pass in variable todos to prop todos of component ToDoList */}
      {/* pass in function toggleToDo to prop toggleTodo of component TodoList */}
      <ToDoList todos={todos} toggleToDo={toggleToDo} />
      {/*userRef - input in variable toDoNameRef*/}
      <input ref={toDoNameRef} type="text" />
      {/*button onclick function calls*/}
      <button onClick={handleAddToDo}>Add ToDo</button>
      <button onClick={handleClearToDos}>Clear Completed ToDo</button>
      <div>{todos.filter((todo) => !todo.complete).length} left to do</div>
    </>
  );
}

export default App;

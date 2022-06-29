//import React + useState hook + useRef hook
import React, { useState, useRef } from "react";
//import ToDoList component js file function
import ToDoList from "./ToDoList";

//App component
function App() {
  //usestate function returns array,default empty[]
  //destructure object - [all todos, function to update todos]
  const [todos, setTodos] = useState([]); //Object destructure

  //userRef - reference elements in html -ie input - create variable{toDoNameRef}
  const toDoNameRef = useRef();

  //button onclick event handler function
  function handleAddToDo(e) {
    //element currently referencing -ie input
    const name = toDoNameRef.current.value;
    //input error check
    if (name === "") return;
    //usestate function -prevTodos object array values concat with new todo 
    //return the new prevTodos object array
    setTodos(prevTodos =>{
      return [...prevTodos,{id:1,name:name,complete:false}]
    })
    //clear for next
    toDoNameRef.current.value = null;
  }

  return (
    //Empty tag to combine return 2 things
    <>
      {/* create component ToDoList */}
      {/* pass in variable todos to prop todos of component ToDoList */}
      <ToDoList todos={todos} />
      {/*userRef - input in variable toDoNameRef*/}
      <input ref={toDoNameRef} type="text" />
      {/*button onclick function call*/}
      <button onClick={handleAddToDo}>Add ToDo</button>
      <button>Clear Completed ToDo</button>
      <div>0 left to do</div>
    </>
  );
}

export default App;

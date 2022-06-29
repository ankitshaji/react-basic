//import React + useState hook + useRef hook
import React, { useState, useRef } from "react";
//import ToDoList component js file function
import ToDoList from "./ToDoList";

//App component
function App() {
  //uses state function returns array,default empty[]
  //[all todos, function to update todos]
  const [todos, setTodos] = useState([]); //Object destructure

  //userRef - reference elements in html -ie input - create variable{toDoNameRef}
  const toDoNameRef = useRef();

  //button onclick event handler function
  function handleAddToDo(e) {
    //element currently referencing -ie input
    const name = toDoNameRef.current.value;
    //input error check
    if(name === "") return;
    //clear for next
    toDoNameRef.current.value=null
  }

  return (
    //create component ToDoList
    //+ empty tag to combine return 2 things
    //pass in variable todos to prop todos of component ToDoList
    <>
      <ToDoList todos={todos} />
      <input ref={toDoNameRef} type="text" />
      <button onClick={handleAddToDo}>Add ToDo</button>
      <button>Clear Completed ToDo</button>
      <div>0 left to do</div>
    </>
  );
}

export default App;

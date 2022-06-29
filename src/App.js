//import React + useState hook
import React, { useState } from "react";
//import ToDoList component js file function
import ToDoList from "./ToDoList";

//App component
function App() {
  //uses state function returns array,default empty[]
  //[all todos, function to update todos]
  const [todos, setTodos] = useState([{id:1,name:"Todo1",complete:false}]); //Array destructure
  return (
    //create component ToDoList
    //+ empty tag to combine return 2 things
    //pass in variable todos to prop todos of component ToDoList
    <>
      <ToDoList todos={todos} />
      <input type="text" />
      <button>Add ToDo</button>
      <button>Clear Completed ToDo</button>
      <div>0 left to do</div>
    </>
  );
}

export default App;

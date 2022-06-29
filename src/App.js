import React from "react";
//import component
import ToDoList from "./ToDoList";

function App() {
  return (
    //create component ToDoList
    //+ empty tag to combine return 2 things
    <> 
    <ToDoList />
    <input type="text"/>
    </>
  );
}

export default App;

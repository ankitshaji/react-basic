import React from "react";
//import ToDo Component
import ToDo from "./ToDo";

//ToDoList Component receives prop todos and prop/func toggleTodo
export default function ToDoList({ todos,toggleToDo }) {
  //for each todo in todos set it as prop in ToDo component
  //return ToDo component
  return todos.map((todo) => {
    //set unique key + set prop todo to todo + pass down prop/func toggleTodo
    return <ToDo key={todo.id} todo={todo} toggleToDo={toggleToDo} />;
  });
}

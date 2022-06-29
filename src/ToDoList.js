import React from "react";
//import ToDo Component
import ToDo from "./ToDo";

//ToDoList Component receives prop todos
export default function ToDoList({ todos }) {
  //for each todo in todos set it as prop in ToDo component
  //return ToDo component
  return todos.map((todo) => {
    return <ToDo todo={todo} />;
  });
}

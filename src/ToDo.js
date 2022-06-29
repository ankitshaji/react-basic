import React from "react";

//Todo Component gets passed in todo prop
export default function ToDo({ todo }) {
  return (
    <div>
      <label>
        <input type= "checkbox" checked={todo.complete}/>
        {todo.name}
      </label>
    </div>
  );
}

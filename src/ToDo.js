import React from "react";

//Todo Component gets passed in todo prop and toggleToDo prop/func
export default function ToDo({ todo, toggleToDo }) {

  //function to pass toggleToDo func the todo id
  function handleToDoClick(){
    toggleToDo(todo.id)
  }

  return (
    <div>
      {/*Todo Component has checkbox and name */}
      <label>
        {/*Set function to update complete boolean of todo on change */}
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleToDoClick}
        />
        {todo.name}
      </label>
    </div>
  );
}

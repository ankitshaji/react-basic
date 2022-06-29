import React from 'react'

//ToDoList Component receives prop todos
export default function ToDoList({todos}) {
  return (
    <div>{todos.length}</div>
  )
}

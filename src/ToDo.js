import React from "react";

//Todo Component gets passed in todo prop
export default function ToDo({ todo }) {
  return <div>{todo.name}</div>;
}

import React, { Component } from "react";
import ItemButtons from "../ItemButtons/ItemButtons";
import './TodoItem.css'

const TodoItem = (props) => {
    console.log(props)
  return (
    <div id="todo-item row" className="todo-item my-2 p-2">
      <li>{props.toDo.item}</li>
      <ItemButtons />
      
    </div>
  );
};

export default TodoItem;

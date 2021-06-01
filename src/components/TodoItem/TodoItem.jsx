import React, { Component } from "react";
import ItemButtons from "../ItemButtons/ItemButtons";


const TodoItem = (props) => {
    console.log(props)
  return (
    <div id="todo-item row" className="todo-item me-4">
      <li>{props.item}</li>
      <ItemButtons />
      
    </div>
  );
};

export default TodoItem;

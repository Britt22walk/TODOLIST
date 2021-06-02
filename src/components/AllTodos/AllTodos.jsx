import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './AllTodos.css'


const AllTodos = (props) => {
console.log(props.listItems)
const list = props.listItems.map((item, idx) =>(
    <TodoItem item={item} key={idx} />
))
    return (
        <div id="todo-list-app" className="container">
          {list}
        </div>
      );
}
 
export default AllTodos;
import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './AllTodos.css'


const AllTodos = (props) => {
console.log(props.items) 

const list = props.items.map((toDo, idx) =>(
    <TodoItem toDo={toDo} key={idx} />
))

    return (
        <div id="todo-list-app" className="container">
       {list}
        </div>
      );
}
 
export default AllTodos;
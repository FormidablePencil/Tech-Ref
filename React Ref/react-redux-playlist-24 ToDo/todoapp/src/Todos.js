import React from 'react';

const Todos = ({todos, deleteTodo}) => {

  const todoList = todos.length ? (
    todos.map(todo => {
      return (      //this return is within a method so it doesn't count as a return() that returns an XML outline...
        <div className="collection-item" key={todo.id}> {/* //every little template within a callback method must have a key. */}
          <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
        </div>
      )
    })
  ) : (
    <p className="center">You have no todo's left, yay!</p>
  );

  return (
    <div className="todos collection">
      {todoList} {/* this is a const variable that returns the product of running the current state though a map() callback/method */}
    </div>
  )
}

export default Todos;

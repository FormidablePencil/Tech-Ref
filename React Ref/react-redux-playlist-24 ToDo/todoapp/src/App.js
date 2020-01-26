import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }
  deleteTodo = (id) => {        //remember that the method for deleting things from a state is by filtering. 
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos               // ommited from being todos: todos
    });
  }
  addTodo = (todo) => {
    todo.id = Math.random();    //We shouldn't ask the user to assign an id to every item they type in so we automate it in generating it's own.
    let todos = [...this.state.todos, todo]; // remmember that to add things into the state we would have to merges using the spread operator.
    this.setState({
      todos
    });
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;

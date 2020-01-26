import React, { Component } from 'react'

class AddTodo extends Component {  //This is not a funcitonal component because it contains a state.
  state = {
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // call function to add a todo
    this.props.addTodo(this.state);
    this.setState({
      content: ''
    })
  }
  render() {  //I presume that classes must have render() where as functional component do not
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add a new todo:</label>
          <input type="text" onChange={this.handleChange} value={this.state.content} /> {/* //* We added a value so that instead of the typed text within the input field stayed it would change back to holding nothing by setting the value={this.state.content} and everytime handleSubmit fires it sets content of state to null. */}
        </form>
      </div>
    )
  }
}

export default AddTodo
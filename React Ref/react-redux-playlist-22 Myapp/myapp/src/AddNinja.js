import React, { Component } from 'react'

class AddNinja extends Component {    //* This is the original and doesn't display the current state. That's visible though 'React Developer Tools'. 
  state = {
    name: null,
    age: null,
    belt: null
  }
  handleChange = (e) => {               //!*? sets the state for this component 
    this.setState({                 //* If the state was in it's parent component it would then be this.props.setState and the other side would like it up within the return( <AddNinja setState={this.setState} /> ) though we would never mess with the state in a lower component from where the state lies. If a component wants something from another component such as a properties from a state then it would do so via props. 
      [e.target.id]: e.target.value  //!  setState[name]: tim; is what would read if the input field with the id of 'name' would contain/be typed in 'Tim'. setState[e.target.id] meaning whatever the id of the triggered element. "e.target.value" is what data is within an element. In this case it's what data is typed into the input field.
    });
  }
  handleSubmit = (e) => {
    console.log(this.state);
    e.preventDefault();               //* this.props.addNinja(this.state) is literally passing in arguments into the eventHandler of addNinja.
    this.props.addNinja(this.state); //! (this.state) is the argument that is passed into the parameter (ninja) from deleteNinja. The props pipe is connected by this.prop.addNinja and from it's parent component addNinja={this.addNinja} that rests in the return() which refers to the eventHandler addNinja.
  }                                     //!*? prevents the default behaviour and ships out the state to the parent 
  //* This demonstrates how to pass down things via prop: this.props.addNinja
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange} />
          <label htmlFor="age">Age:</label>
          <input type="text" id="age" onChange={this.handleChange} />
          <label htmlFor="belt">Belt:</label>
          <input type="text"id="belt" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddNinja
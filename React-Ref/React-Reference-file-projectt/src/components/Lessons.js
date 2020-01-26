import React from 'react'
import ReactDOM from 'react-dom';

//!*? List and keys:

//* Below, we loop through the numbers array using the JavaScript map() function. We return a <li> element for each item. Finally, we assign the resulting array of elements to listItems:
class Lesson extends react.component { 
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>  //! you would put keys in tags/elements <li 'here' ></li> 
<li key={number.toString()}>{number}</li>  //* The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys: <li key={todo.id}> When you don’t have stable IDs for rendered items, you may use the item index as a key as a last resort: // Only do this if items have no stable IDs <li key={index}></li>
);
  render(){
    return(
      <div>
        <ul>{listItems}</ul>,             {/* //* listItem is a variable we've easily plopped into <ul> and listItem contains the whole list of <li>'s */}
      </div>

    )
  }
  
}

ReactDOM.render( Lesson,
  document.getElementById('root')
);

//!*? Keys Must Only Be Unique Among Siblings

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},        //* notice there are several {objects} within an {array} and each abject has an id. id is used for several reasons one of which is for assigning them to keys. 
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
ReactDOM.render(
  <Blog posts={posts} />,
  document.getElementById('root')
);

//* Forms in Html 

<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>

//* vs React. Called Controlled Components

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});                                     //* This event handler sets the state of value to what has been changed/typed in the element that activated this function from onChange. event.target.value means the value of what element was triggered.
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);                     //* Since handleChange runs on every keystroke to update the React state (that's what an onChange event does), the displayed value will update as the user types.
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>                              {/* //* To prevent the default behavior of onSubmit, we would have to "attach" an event handler that prevents the default behavior. */}
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />         {/* //* In React, forms must not have their own state (it may not even work). So here we've told React to go get the 'value' from state and when onChange then fire a fuction that updates the state. */}
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

//* With a controlled component, every state mutation will have an associated handler function. This makes it straightforward to modify or validate user input. For example, if we wanted to enforce that names are written with all uppercase letters, we could write handleChange as:
handleChange(event) {
  this.setState({value: event.target.value.toUpperCase()});
}

//! Check out the Forms section of React Documentation.


class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;           //* if target.type (target is the element that fired this function) is a checkbox the the const value contains target.checked (aka elementThatFiredThisFunction.checked={this.state.isGoing}).
    const name = target.name;                                                           //* const name will be whatever the target is which target means from where this function handlerInputChange() was fired.   

    this.setState({
      [name]: value       //! I don't know why name is in []
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}
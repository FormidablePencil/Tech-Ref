import React, { Component } from 'react';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'
import './App.css'

//!*? ==============
//* Everything is explained with comments for referencing purposes.
//* This uses: 
//* Knowledge- of html 
//* of React
//* Javascript
//! To truly underatand what's going on you must see the website this code has created.
//! Now we lastly must understand how everything fits together to create a program that you may create a card, delete and edit within the playgrounds of React.
//* It's the smaller component that everything is passed into and not the other way around of passing smaller components into their parent.
//!*? ==============

class App extends Component { //! Notice that THERE IS NO constructor and super used here. It might just be optional since all the 
  state = {   //this is the original state. 'React Developer Tools' will show the currently set state.                                                                                    //!*?State
    ninjas: [ 
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
    ] 
  }
                                                           //!*?Creates new card.
  addNinja = (ninja) => {                                                                        //* both these functions fuck with the state, that's why there are here in this toppest level where the state is.
  ninja.id = Math.random();      //adds an id property within ninja for each object it has...   //! 'ninja' is not a variable it is a parameter in which we pass in arguments. 
  let ninjas = [...this.state.ninjas, ninja];                                                  //! Because the parameter of (ninja) was passed this.state into it which now should read [...this.state.ninja, this.state from the lower level component AddNinja]. (keep in mind that what shows in the state of AddNinja is the original but we've changed it). The spead operator means to merge the two together.                                             
  this.setState({
    ninjas: ninjas
  });
}
  deleteNinja = (id) => {                   //* You basically just filter the current state through a condition, return that and setState() to that. We've passed in the parameter the id associated to object with the data we want to remove from the state.
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id   // Return only everything without the id of what was passed into the parameters.
    });
    this.setState({
      ninjas: ninjas        // We've changed the "ninjas" within the state. Can be omitted to just ninjasy
    });
  }
  componentDidMount(){
    console.log('component mounted');
  }
  componentDidUpdate(prevProps, prevState, snapshot){ //* Means the previous prop and state before it was updated with our magical logical programming. 
    console.log('component updated');
    console.log(prevProps, prevState);
  }

  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>                       {/* // It's more like the parent component passes their function and state into the smaller components who really use them. */}
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} /> {/* //! This is the component that renders an array mapped out with state's properties.} */}
{/* //* So this Ninjas.js component wants that state and the deleteNinja function from here. */}
        <AddNinja addNinja={this.addNinja} />                                {/* //! This creates the input field for the user to add to the state judging by what I see from the users side. */}
{/* //* This AddNinja.js wants just the function addNinja */}
      </div>
    );
  }
}

export default App;

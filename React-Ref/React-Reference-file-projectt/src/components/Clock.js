//This component deminstrates how to use state and mounting.
import React from 'react'
//* To recap how we've wired the clock we've set up set 'this' to this class, set up state and set a a property with the current time. Then we've rendered it into the DOM with the Date's() method date.toLocaleTimeString(). We've created a function tick() to set the time of when tick() fires and then made React fire a tick() every 1000; 1 second. And lastly mounted the setInterval so firing the tick() every second doesn't go off anymore if the Clock Component is ever removed from the DOM. That's all to it.

class Clock extends React.Component {
  constructor(props) {                  //! here's a constructor and a super but is it really all that necessary.
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {                   //* When the output is inserted in the DOM, React calls the componentDidMount() lifeCycle method.
    this.timerID = setInterval( //* While this.props is set up by React itself and this.state has a special meaning, you are free to add additional fields to the class manually if you need to store somthing that doesn't participate in the data flow (like a timer ID).
      () => this.tick(),//* here we asked React from setInterval to fire this.tick() every 1000 wich is every second. 
      1000
    );
  }

  componentWillUnmount() {                //* If the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle method so the timer is stopped.
    clearInterval(this.timerID);
  }

  tick() {                              //* tick() saves the current time to the exact second into the state.
    this.setState({                     //* this.state.date = new Date() is the alternative form that works in vanila Javascript but is forbidden in React. this.setState is used instead.
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2> {/* //* toLocaleTimeString() is a method within the date() method. That is a pre-built method from JS. What this does is return the time saved in state to the exact second. */} 
      </div>
    );
  }
}

export default Clock
import React from 'react'
import ReactDOM from 'react-dom';

function UserGreeting(props) { //* These 3 are functional component.
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;       //* This is conditional rendering 
}

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,    //Interesting. We could use this as an example by which to follow in chaging the what to render. This is easy.
  document.getElementById('hello')
);

//* Another example but using a class and binding the event handlers to the class with constructor and super.


class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {                                                      //* Here's the logic. If "isLoggedIn" is true execute line of code else execute another line of code instead 
      button = <LogoutButton onClick={this.handleLogoutClick} />;     //* LogoutButton is a lower component but since this whole page is to dimenstrate examples we don't have anything within these components.
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);

//* While declaring a variable and using an if statement is a fine way to conditionally render a component, sometimes you might want to use a shorter syntax.
//* You may embed any expressions in JSX by wrapping them in curly braces. 

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&                           //* if the condition is true, the element right after && will appear in the output. If it is false, React will ignore and skip it.
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root')
);

//* Another method for conditionally rendering elements inline:

render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.        
      {/* //* If true then display The user is Currently logged in. else display the sentence with a 'not' instead */}
    </div>
  );
}

//* It can also be used for larger expressions although it is less obvious what’s going on:

render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      {isLoggedIn ? (
        <LogoutButton onClick={this.handleLogoutClick} />
      ) : (
        <LoginButton onClick={this.handleLoginClick} />
      )}
    </div>
  );
}

//* Just like in JavaScript, it is up to you to choose an appropriate style based on what you and your team consider more readable. Also remember that whenever conditions become too complex, it might be a good time to extract a component.



function WarningBanner(props) {
  if (!props.warn) {
    return null;                            //* this if statement is refereing to the function itself. If props.warn is false then return null which means not to render the function.
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};                                       //* true but when clicked on button then handleToggleClick fires and changes it to false. 
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning                                   
    })); //Dennis Aleksandrov how's it going. This screen though isn't high resolution
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);


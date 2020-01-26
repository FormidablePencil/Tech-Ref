// In html event 

<button onclick="activateLasers()">
  Activate Lasers
</button>

//* vs XML React 

<button onClick={activateLasers}>
  Activate Lasers
</button>

// Html 

<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>


//* vs React You must call preventDefault explicitly.

function ActionLink() {
  function handleClick(e) {
    e.preventDefault();                     //Here, e is a synthetic event. React defines these synthetic events according to the W3C spec, so you don’t need to worry about cross-browser compatibility.
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}



class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>  //* bind is used if arrow function on onClick isn't used. {() => this.handleClick} binding is recommended though because pssing callbacks through props through lower components would cause those components to render extra times.
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
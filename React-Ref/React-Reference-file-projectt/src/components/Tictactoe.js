//* This is the only React Reference I have here. Mind that the documentation is the best reference.
//* This is the only page where everything is, but typically you would put a every component in it's own seperate page so it would be maintainable.
import React from 'react';
import '../index.css';

//! I'm going to have to know what I'm looking at. Label what every section of code does and what keyword gives it away.
//! I am now trying to understand how everything fits in the big picture. I'll have to understand the Js part so I'll have to do special research on js parts and with React I'll read through the whole documentation an comeback so to get a fuller grasp of what everything is and everything should be in the whole picture.


//* Functional component that vs. Class is that it uses props to pass in variable.
//* Functions create elements, modify their elements and wrap it up in one Keyword (Square with a capital "S" in this case). 
function Square(props) {                        //*  There's no render {} here. Render is where you use the html elements and lay it all out. Functions don't render anything into the DomDOM.
    return (                                    //*  Functional components don't use 'this' at all but just props to pass in things.
      <button
        className="square"
        onClick={props.onClick}                      //props.onClick refers to the "onClick=" in the class above this one.
        >
        {props.value}
      </button>
    );
  }

//* classes use the 'this' keyword excessively because typically this is where all the logic such as event handlers lie. They also render the function into the DOM thus they have the render(). Classes just add content and set props to elements which are the react functions and classes underneath the class from which it's being used.
class Board extends React.Component {
  renderSquare(i) {                                     //* We are bundling Square and the data set to on to it up as a renderSquare html element. We need this piece of code because some way we have to pass in data through props but if the road cuts off too soon you the data won't be send (the road starts from bottom to top on the virtual DOM).
    return (
      <Square
        value={this.props.squares[i]}                   //* props is the que for the parent class ("Board" in this case) to pass data via props
        onClick={() => this.props.onClick(i)}           //* Because onClick uses an arrow function the 'this' keyword makes it so the data just passes right through it.
        //! lets try to add a function to console.log the 'this' key to see what does 'this' refer to in a function.
        />
    );
  }

  //* render layout the html elements and adds in the props but doesn't modify the elements e.g. onClick is a modifier I'd say.
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}                        {/* //*!? -01- this is where we've passed in data so to go down through props. */}
          {this.renderSquare(1)}                        {/*//* Remmember this for the rest of your React journey. 'this' refers to the class itself. Only classes use 'this', functions do not.  */}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
//!                                          Take notice of the {} notation
class Game extends React.Component {                   //* We've lifted state up once again now to here because we wanted to add a history feature which records every move done by Board component. Typically you would put state at the most lowest components first and then lift them up for simplicity so not to messing up.
  constructor(props) {                                  //* a class constructor that assigns the initial this.state
    super(props);                                         //* note that we passed in prop to the base constructor
    this.state = {
      history: [{
        squares: Array(9).fill(null),                    //* read this as an actual method but what it returns is what will be stored in "squares" key
      }],
      stepNumber: 0,                         
      xIsNext: true,
    };                                                   
  }


  //* handle[event] is an event handler (handles the event) and on[event] is an event.
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);   //* slice(num, num) means from what index to what index will be copied into the history variable. Js reference.
    const current = history[history.length - 1];
    const squares = current.squares.slice();                                  
    if (calculateWinner(squares) || squares[i]) {       //???
      return;
    }                                                   //!? made it so to return earlier by ignoring a click if someone won the game or if a Square is already filled.
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({                                     //* this.setState is a METHOD reserved to React and it changes the state
      history: history.concat([{                        //* The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array. Js reference.
        squares: squares                                //??? Does "squares" within the array assign the squares variable that is outside of the array.
      }]),
      stepNumber: history.length,                       //???
      xIsNext: !this.state.xIsNext,                     //* this is the switch if statment is true then 'X' else 'O'
    });
  }



  jumpTo(step) {                                        //* this method updates that stepNumber in the state.
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,                        //* changed x to true if the number that we're changing stepNumber to is even. This is some heavy logic
    });
  }

  render() {
    const history = this.state.history;                 //* I understand now that the reason why this logic and it's properties are here so to refer to it as {status} rather than {this.status} making it far more difficult.
    const current = history[this.state.stepNumber];     
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
      'Go to move #' + move :
      'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    })

    let status;
    if (winner) {
      status = 'winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}                             //* The this.props.squares from the a level below this one refers to this "squares={}" 
            onClick={(i) => this.handleClick(i)}                  //* I wished they added an example that took data from state directly from here. Changing it from this.props.something to this.state.something
          />
        </div>
        <div className="game-info">
          <div>{status}</div>                                     {/*//* {status} just takes what's inside it's render. If the data that needed to get pulled in was in the class but not in the render then it would be {this.status} and it'll be a fucntion that returns the result. Better to stick with how it is because those are highly unnecessary steps. If some data needed was out side of the scope of class or function then you'd use {this.props.whatEverYouLikeToCallIt} if class {props.whatEverYouLikeToCallIt} if function, and on the other side set what 'whatEverYouLikeToCallIt=' */}
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game
  // ========================================



//* This isn't an element because it doesn't have a return() from where jsx lies
function calculateWinner(squares) { //* functional Component. This is the logic by which the game plays. It determines when you what player wins and when to end the game.
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {          //* here's the logic. 3 conditions must be met to return square[a]
      return squares[a];
    }
  }
  return null;
}
/* //* The steps:
///?     - Created a button that if clicked then it would execute an alert function
///?     - We've set a props within the button value. So the parent determines that
///?     - We've then made a function that allowed to pass in value through renderSquare( i )
///?     - Then placed renderSquare(i) in HTML form
///?     - Created the last outter component Class and added style
///?     - Lastly put the most outter Class called <Game /> into the index.html as by id="root"
///?     - Created state to remember the new value generated by onClick{() => value: "X"}
///?     - Refactored it... means to make clean and elagant form of code without changing the result 
///?     - Made the state be stored un the Board component instead of the individual Square components.
///?     - made it so the Square recieves a value via prop from Board; renderSquare() which that take the value from this.state
///?     - we then set an onClick on the Sqaure button which takes an onClick passed down from board via props that runs handleClick(i) which changes the state
///?     - handleClick copies the state; by using slice() to return the whole state and copy it locally in const squares(i) then set this.state(squares: squares)
///?     - we've changed Square component from class to a function component since it's a controlled component (meaning that the Square component receive values from the Board component and infor the Board component when they're clicked) to make it less tedious to type. Typically immuatable components that just recieve data via props should be typically be a functional component.
*/


/* //? New things we've covered:
//*      - Creating js functions within the <buttton onCLick={() => alert('clicked')}>
//*      - passed a value via prop (i)
//*      - duplicated a function byproduct (creating buttons in this case)
//*      - used state to remember the new values generated from the onClick handler
//*      - by callng this.setState within an onClick handler in a Square's render method, we tell React to re-render the square whenever its <button> is clicked.
//*      - The "onClick{() => alert('clicked)}" is the same as "onClick{function() { alert('clicked') }}" the arrow method of doing this makes the 'this' set properly instead of having constructor and super to fix 'this'
//*      - made the Square components 'controlled components'; The Square components receive values from the Board component and inform the Board component when they’re clicked.
//*      -
//*      -
//*      - used map(...)
*/

//! This is all to the basics of react. Still I'm confused with about a half of what was done here.

//??? Practice questions:
//??? -01- Where is the parameter that we pass in data in order for it to travel down via props? 
//??? -02- What signifies the end of a prop journey in which the data is displayed on the client side or is used take to be used in a function lower down on the pyrimid scheme?  
//??? -03- 
//??? -04- 


import React from 'react'
import Game from './components/Tictactoe'
import Clock from './components/Clock'
import ReactDOM from 'react-dom';
import Calculator from './components/LiftingStateUp';


class Main extends React.Component {
  render() {
    return (
      <div>
        <Game />
        <hr />
        <Clock />
        <hr />
        <Calculator />
      </div>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
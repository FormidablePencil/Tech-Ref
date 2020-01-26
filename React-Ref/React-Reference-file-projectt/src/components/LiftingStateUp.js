//* Break everything apart here. 
import React from 'react';

//!                                          Don't read the names and words. Look for the brackeets, var, if and everything of the fundemental of js.
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};
                                      //* These are functional components 
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {              //! Don't understand the syntax of this logic stuff. E.g. I understand that this is an if statement but I do not understand the the argument Number.isNaN(input)
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}                                                   //* watchout for } that is what tells you when a block of code ends

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

class TemperatureInput extends React.Component {          
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value); //* means accessing the method within what was passed through props
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>                      //! Wtf is the array brackets [] around scale Idk, I don't understand.
        <legend>Enter temperature in {scaleNames[scale]}:</legend>  {/* //* To understand the code you should start with reading what is within the render() method. */}
        <input value={temperature}
              onChange={this.handleChange} />
      </fieldset>
    );
  }
}


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (                                  //* this is the top most component
      <div>
        <TemperatureInput                       //* created two components out of one react component and set different variable for each one.
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default Calculator
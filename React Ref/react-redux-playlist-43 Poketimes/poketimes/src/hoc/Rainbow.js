import React from 'react' 
//! this is only scratching the surface of higher order components.

const Rainbow = (WrappedComponent) => {

  const colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
  const randomColour = colours[Math.floor(Math.random() * 6)]; //this is a random number generator.
  const className = randomColour + '-text';

  return (props) => (
    <div className={className}>
      <WrappedComponent {...props} /> {/*  //* Inorder to apply in the other side props to supercharge the component we would pass in ...props here. */}
      {/* This isn't a name for the component we are wrapping Rainbow around. it's just a parameter in which we assign the we wish to super charge with it . You would use on the other side import, export default Rainbow(with the component name in here) and props within the parameters of the const arrow-function. */}
    </div>  
  )
  
}

export default Rainbow

import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom' //* The component doesn't have a router attached to it so to get the benifits of (props) powers we would super charge the component with importing the { withRouter } and using the props ofcourse. Super charged component are also known as Higher order components (HOC).

const Navbar = (props) => {
  // console.log(props);
  // setTimeout(() => {
  //   props.history.push('/about')
  // }, 2000);
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <Link className="brand-logo" to="/">Poke' Times</Link>    {/* Link means href but React intercepts the request. */}
        <ul className="right">
          <li><NavLink exact to="/">Home</NavLink></li>   {/* NavLink is the same as Link but for styling purposes NavLink is used in setting the class name to active. This way you can just style the className="active" rather than adding more Js into the mix. */}
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
      </div>
    </nav> 
  )
}

export default withRouter(Navbar)     //? Super charging it aka making it a (HOC)
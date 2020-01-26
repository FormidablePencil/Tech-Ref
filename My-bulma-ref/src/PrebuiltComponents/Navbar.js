import React, {Component} from 'react';
import {Link} from 'gatsby';
import Img from 'gatsby-image'; 
import { useStaticQuery, graphql } from "gatsby"

//I've implemented automatic functions to add and delete classes and display: "none"; & "block"; mess with the elements with the same corresponding id to data-target. 

class Navbar extends Component {
                               
  dropdown = (e) => {                                                   //* automatic function.
    var dropDownDataset = document.getElementById(e.target.dataset.target);
    let currentTarget = e.target.className;

    if ( currentTarget.search("is-active") === -1 ) {
      e.target.className += " is-active";
      dropDownDataset.className = dropDownDataset.className.replace(" is-hidden", "");
    } else {
      e.target.className = currentTarget.replace(" is-active", "");
      dropDownDataset.className += " is-hidden";
    }
  } 
  
  burgerShow = (e) => {                                                  //* automatic function.
  let navbarMenu = document.getElementById(e.target.dataset.target);  //! dataset (that's the data.target attribute).
  
  if (navbarMenu.style.display !== "block") {
      e.target.className += " is-active";                             //! togglable className="is-active"
      navbarMenu.style.display = "block";                             //! togglable style.display
    }else {
      navbarMenu.style.display = "none";
      let element = e.target.className;
      e.target.className = element.replace(" is-active", "");  //If I need to change the className then use replace(method). This is now a fully automatic toggle eventHandler. Versitile.
    }
  }
  
  render() {
    return (
      <>
        <NavbarElements dropdown={this.dropdown} burgerShow={this.burgerShow}/> 
      </>
    ) 
  }
}


const NavbarElements = (props) => {
  const data = useStaticQuery(graphql`
  {
    image5: file(relativePath: {eq: "gatsby-astronaut.png"}) {
      childImageSharp {
        fixed(width:40) {
          ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  
  return(
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <figure className="image is-32x32">
              <Img fixed={data.image5.childImageSharp.fixed} />
            </figure>
          </Link>
          <span role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="true" data-target="navbarBasicExample" onClick={props.burgerShow} id="menuIcon">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>  {/* //* this is the hamburger thing that show up on small screens... or so it should. */}
            <span aria-hidden="true"></span>
          </span>
        </div>

        <div className="navbar-menu " id="navbarBasicExample">
          <div className="navbar-start is-size-5">
            <div className="navbar-item">Home</div>
            <div className="navbar-item">Documentation</div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" onClick={props.dropdown} data-target="moreOptions">
                More
              </a>

              <div className="navbar-dropdown is-hidden" id="moreOptions">
                <Link to="/" className="navbar-item">
                  About
                </Link>
                <Link to="/" className="navbar-item">
                  Jobs
                </Link>
                <Link to="/" className="navbar-item">
                  Contact
                </Link>
                <hr className="navbar-divider" />
                <Link to="/" className="navbar-item">
                  Report an issue
                </Link>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/" className="button is-primary">
                  <strong> Sign up</strong>
                </Link>
                <Link to="/" className="button is-light">
                  Log in 
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
  
  
export default Navbar;
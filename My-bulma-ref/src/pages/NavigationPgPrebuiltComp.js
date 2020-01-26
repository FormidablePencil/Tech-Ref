import React, {Component} from 'react'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faCubes } from '@fortawesome/free-solid-svg-icons'

                                                                      //! Yep, classes can be pages.
class ComponentsHome extends Component { // with gatsby the lower components will be either classes or functional just depending on whether a component will need some js wiring. The most toppest class will be a funcitonal one in order for to pass thing down with GraphQL.
  clickOpenComponents = (e) => {
    let VariousPrebuiltComp = document.getElementById("VariousPrebuiltComp");
    if (e.target.className === "is-active") {
      e.target.className = " ";
    } else {
      e.target.className = "is-active";
    }                                                                       //* What this does is change className from " " to "is-active" and back.
    console.log(e.target.className);

    if (VariousPrebuiltComp.className === "is-hidden") {
      VariousPrebuiltComp.className = " ";
    } else {
      VariousPrebuiltComp.className = "is-hidden";
    }
  }                                                                        
  //*!? we will have to learn a way to automate this. Once we get to the tabs section of bulma components then I'll watch the video on how the guy uses the additional aria-control stuff so that I could link it up and automate this proccess by when onClick on an element then e.target.whatever would be taken and link it to it's corresponding thing. This way we just use one event handler for everything in the menu list. But for now we will leave it as is and concentrate on studying bulma.
  
  render () {
    return (
    <>
      <div className="section">
        <div className="columns box has-text-centered">

          <div className="column">
            <Link to='/'>
              <span className="icon is-small">
                <FontAwesomeIcon icon={faHome} />
              </span>
            </Link>
          </div>
          
          <div className="column">
            <Link to='/ElementsWebsite'>
              <span className="icon is-small">
                <FontAwesomeIcon icon={faLeaf} />
              </span>
            </Link>
          </div> 
          
          <div className="column">
            <Link to='/NavigationPgPrebuiltComp'>
              <span className="icon is-small">
                <FontAwesomeIcon icon={faCubes} />
              </span>
            </Link>
          </div>

        </div>
      </div>

      <div className="section"> {/* //* There are multiple styles of breadcrumbs to choose from with bulma */}
        <div className="has-background-warning box">
          <nav className="breadcrumb is-centered is-small" arial-label="breadcrumbs">
            <ul>
              <li className="is-active">
                <Link to="/VariousPrebuiltComp">
                <FontAwesomeIcon icon={faHome} />
                ComponentsHome
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="columns">
        <div className="column is-3 box">

          <div className="section">
            <aside className="menu">
              <strong className="has-text-primary">capsule &lt;aside className="menu"/&gt;</strong>
              <p className="menu-label">
                Websites <strong className="has-text-primary">&lt;p className="menu-label"/&gt;</strong>
              </p>
              <ul className="menu-list">
                <li><Link to="/">Index<strong className="has-text-primary"> &lt;ul, li, Link/&gt;</strong></Link></li>
                <li><Link to="/ElementsWebsite">Elements Website</Link></li>
                <li>
                  <a className=" " onClick={this.clickOpenComponents}>Components Website</a>
                  <ul id="VariousPrebuiltComp" className="is-hidden">
                    <li><Link to="/CardsPage">Cards</Link></li>
                    <li><Link to="/VariousPrebuiltComp">Navbar</Link></li>
                    <li><Link to="/VariousPrebuiltComp">Dropdowns</Link></li>
                    <li><Link to="/VariousPrebuiltComp">Messages</Link></li>
                    <li><Link to="/VariousPrebuiltComp">Modals</Link></li>
                  </ul>
                </li>
              </ul>
              <p className="menu-label">
                Team Settings
              </p>
              <ul className="menu-list">
                <li><Link to="/">Manage Your Team</Link></li>
                <li><Link to="/">Invitations</Link></li>
                <li><Link to="/">Cload Storage Environment Settings</Link></li>
              </ul>
            </aside>
          </div>

        </div>
      </div>
    </>
    )
  }
}

export default ComponentsHome
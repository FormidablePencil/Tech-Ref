import React from 'react';
import {Link} from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'


const Dropdown = (props) => {
  return (
    <>
      <div className="columns">{/*//* is-centered can be aplied here  */}
        <div className="column is-narrow is-offset-3 has-background-success">

          <div className="dropdown is-active" id="dropdown">  {/* //* For onClick to work I must wire it up myself with js since bulma is just a css framework without js stuff. */}
            <div className="dropdown-trigger">
              <button className="button" aria-haspopup="true" aria-controls="dropdown-menu5" onClick={props.showDropdown}>
                <span>Dropdown button</span>
                <span className="icon is-small">
                  <FontAwesomeIcon icon={faCaretDown} />
                </span>
              </button>
            </div>

            <div className="dropdown-menu" id='dropdown-menu5' role="menu">
              <div className="dropdown-content">
                <Link to="/" className="dropdown-item">
                  Dropdown-item
                </Link>
                <Link to="/" className="dropdown-item">
                  Other dropdown-item 
                </Link>
                <Link to="/" className="dropdown-item is-active">
                  Active dropdown-item
                </Link>
                <Link to="/" className="dropdown-item">
                  Other dropdown item
                </Link>
                <hr className="dropdown-divider" />  
                <Link to="/" className="dropdown-item">
                  With a divider
                </Link >
              </div>
            </div>
          </div>
        </div>

        <div className="column is-narrow is-offset-2 has-background-success"> 
          {/* //* Made it so it only take up as much of the column as it needs with "is-narrow" */}
          
          <div className="dropdown is-up is-hoverable"> {/* //* This is container that holds the button and it's dropdowns */}
            <div className="dropdown-trigger">
              <button className="button" aria-haspopup="true" aria-controls="dropdown-menu2">
                <span>hover over & you'll see content</span>
                <span className="icon is-small">
                  <FontAwesomeIcon icon={faCaretDown} rotation={180} />
                </span>
              </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu2" role="menu">
              <div className="dropdown-content">
                <div className="dropdown-item">
                  <p>Insert any text here or whatever you want. Picture, content, etc.</p>
                </div>
                <hr className="dropdown-divider" />
                <div className="dropdown-item">
                  <p>Just use div instead of Link or a tags.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
import React, { Component } from 'react';
import {Link} from 'gatsby'
import Messages from "../PrebuiltComponents/Messages"
import Modal from "../PrebuiltComponents/Modal"
import Dropdown from "../PrebuiltComponents/Dropdown" //I believe I got the wiring with Js down.
import Navbar from "../PrebuiltComponents/Navbar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons'
import {faCaretSquareDown} from '@fortawesome/free-solid-svg-icons'
import Pagination from '../PrebuiltComponents/Pagination';
import Panel from '../PrebuiltComponents/Panel';
import Tabs from '../PrebuiltComponents/Tabs';

class DropdownsMessages extends Component { 
  openModal = (e) => {  //* This is all there is to it in wiring up elements with Javascript. More complex things is designed for React and it calls to utilize state and alot of props.
    document.getElementById('page-modal').style.display = "block";
  }
  closeModal = (e) => {
    document.getElementById('page-modal').style.display = "none";    
  }
  
  showDropdown = (e) => {
    // let button = document.getElementById('dropdown-menu5').style.display; Does not work. .style.display should not be attached inorder to store it in a variable. 
    let button = document.getElementById('dropdown-menu5'); 

    if ( button.style.display !== "none") {
      button.style.display = "none";
    } else {
      button.style.display = "block";
    }
  }
  
  render() {
    return (
      <>
        <Navbar />

        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-5">
              <Tabs />
            </div>
          </div>
        </div>
                                  {/* //* Breadcrumbs component. */}
        <div className="container is-centered">
          
          <div className="section">
            <div className="box">
              <nav className="breadcrumb is-centered is-small" arial-label="breadcrumbs">
                <ul>
                  <li>
                    <Link to="/ComponentsWebsite">
                    <span className="icon is-small">
                      <FontAwesomeIcon icon={faHome} />
                    </span>
                    ComponentsHome
                    </Link>
                  </li>
                  <li className="is-active">
                    <Link to="/DropdownsMessages">
                      <span className="icon is-small">
                      <FontAwesomeIcon icon={faCaretSquareDown} />
                      </span>
                      Dropdown & messages
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

            <Dropdown 
              showDropdown={this.showDropdown}
              hideDropdown={this.hideDropdown} />

            <Messages />

            <Modal 
              modalParagraph="Button that fires handleClick which sets is-active on Modal."
              openClick={this.openModal}
              closeClick={this.closeModal}
               /> 
            
            <Panel />


            <Pagination />
        </div>
      </>
    );
  };

}

export default DropdownsMessages;
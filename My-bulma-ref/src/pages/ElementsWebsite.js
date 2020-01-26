import React from 'react';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'
import { faCubes } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
// $ yarn add @fortawesome/fontawesome-svg-core
// $ yarn add @fortawesome/free-solid-svg-icons  //* https://github.com/FortAwesome/react-fontawesome
// $ yarn add @fortawesome/react-fontawesome

const ElementsWebsite = () => {
  return (
    <>
      <div className="container box"> 
        <Link to="/ElementsWebsite">
          <span className="fa-stack">
            <FontAwesomeIcon className="icon is-large has-text-success fa-stack-2x" icon={faCircleNotch} spin/> 
            <FontAwesomeIcon className="icon has-text-success is-small fa-stack-1x" icon={faLeaf}/> 
          </span>
        </Link>  
        <Link to='/NavigationPgPrebuiltComp'>
          <FontAwesomeIcon icon={faCubes} pull="right" className="icon is-large" />
        </Link>
        <Link to="/">
          <FontAwesomeIcon icon={faHome} pull="right" className="icon is-large" />
        </Link>
        <p>"box" adds these awesome shadows. You can use it like anywhere. </p>
        <p>we've changed the charging icon from black to green with a wrapped around with a bulma class </p>
      </div>
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-3">
            <progress className="progress is-small is-info"></progress>
          </div>
        </div>
      </div>
    </>
  );
};


export default ElementsWebsite;
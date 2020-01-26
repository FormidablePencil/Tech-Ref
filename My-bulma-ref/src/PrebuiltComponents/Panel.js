import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {faBook} from '@fortawesome/free-solid-svg-icons'

const Panel = () => {
  return (
    <>
      <nav className="panel is-info">
        <p className="panel-heading">
          Repositories
        </p>
        <div className="panel-block">
          <p className="control has-icons-left">
            <input type="text" className="input" placeholder="Search"/>
            <span className="icon is-left">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </p>
        </div>
        <p className="panel-tabs">
          <a className="is-active">All</a>
          <a href={null}>Public</a>
          <a href={null}>Private</a>
          <a href={null}>Sources</a>
          <a href={null}>Forks</a>
        </p>
        <a href={null} className="panel-block is-active">
          <span className="panel-icon">
            <FontAwesomeIcon icon={faBook} />
          </span>
          bulma
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <FontAwesomeIcon icon={faBook} />
          </span>
          journal
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <FontAwesomeIcon icon={faBook} />
          </span>
          philosophies
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <FontAwesomeIcon icon={faBook} />
          </span>
          mysticism
        </a>
        <label className="panel-block">
          <input type="checkbox" />
            remember me
        </label>
        <div className="panel-block">
          <button className="button is-link is-outlined is-fullwidth">
            Reset all filters
          </button>
        </div>
      </nav>
    </>
  );
};

export default Panel;
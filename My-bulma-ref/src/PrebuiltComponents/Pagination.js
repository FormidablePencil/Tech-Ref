import React from 'react';

const Pagination = () => {
  return (
    <>
      <div>
        <nav className="pagination is-rounded" role="navigation" aria-label="pagination"> 
          <a className="pagination-previous">Previous</a>
          <a className="pagination-next">Next Page</a>
          <ul className="pagination-list">
            <li>
              <a className="pagination-link" aria-label="Go to page 1">1</a>
            </li>
            <li>
              <span class="pagination-ellipsis">&hellip;</span>
            </li>
            <li>
              <a className="pagination-link is-current" aria-current="page" aria-label="Go to page 45">45</a>
            </li>
            <li>
              <a className="pagination-link" aria-label="Go to page 46">46</a>
            </li>
            <li>
              <a className="pagination-link" aria-label="Go to page 47">47</a>
            </li>
              <span class="pagination-ellipsis">&hellip;</span>
            <li>
              <a className="pagination-link" aria-label="Go to page 86">86</a>
            </li>
          </ul>
        </nav>
      </div> 
    </>
  );
};

export default Pagination;
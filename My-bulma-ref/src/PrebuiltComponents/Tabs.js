import React from 'react';

const Tabs = () => {
  return (
    <>
      <div className="tabs is-right is-boxed">
        <ul>
          <li className=""><a href={null}>Pictures</a></li>  
          <li className=""><a href={null}>Music</a></li>  
          <li className=""><a href={null}>Videos</a></li>  
          <li className="is-active"><a href={null}>Documents</a></li>  
        </ul> 
      </div> 
    </>
  );
};

export default Tabs;
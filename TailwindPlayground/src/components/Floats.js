import React from 'react';

const Floats = () => {
  return (
      <div className="bg-gray-300 p-4 mx-auto clearfix">
        <div className="float-left md:float-right">
          <p className="bg-gray-400">Using floats. 
            <br />
            Using floats.
            <br/>
             Using floats. </p>
        </div>
          <p>Without clearfix the float element would bleed out of the box. Clearfix is the solution.</p>            
      </div>
  );
};

export default Floats;
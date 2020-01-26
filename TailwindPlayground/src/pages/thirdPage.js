import React from 'react';
import "../styles/mystyles.css" //Everything is now set up and ready to get mastering!
import Floats from '../components/Floats';
import {Link} from "gatsby"


const Tailwind = () => { 
  return (
    <div>
    <Link to="/">index</Link> 
    <br/>
    <Link to="/secondPage">secondPage</Link>
    <br/>
    <Link to="/thirdPage">thirdPage</Link>
      <div className="bg-purple-200 sm:bg-purple-300 md:bg-purple-400 lg:bg-purple-500 xl:bg-purple-500 text-white mb-1 p-3">This is my Tailwind playground</div>
      <div className="container mx-auto bg-gray-100"> 
        <div className="text-white text-sm bg-gray-800 flex">
          <div className="flex-1">flexbox will also be covered later on ...</div>
          <div className="flex-1">flexbox will also be covered later on ...</div>
          <div className="flex-1">flexbox will also be covered later on ...</div>
        </div>
        <div className="table mx-auto p-2">
          <div className="table-row">
            <div className="table-cell bg-blue-200 text-xs px-3 py-1">1 cell</div>
            <div className="table-cell bg-blue-300 text-xs px-3 py-1">2 cell</div>
            <div className="table-cell bg-blue-200 text-xs px-3 py-1">3 cell</div>
            <div className="table-cell bg-blue-300 text-xs px-3 py-1">4 cell</div>
            <div className="table-cell bg-blue-200 text-xs px-3 py-1">5 cell</div>
          </div>
          <div className="table-row">
            <div className="table-cell bg-blue-300 text-xs px-3 py-1">1 cell</div>
            <div className="table-cell bg-blue-200 text-xs px-3 py-1">2 cell</div>
            <div className="table-cell bg-blue-300 text-xs px-3 py-1">3 cell</div>
            <div className="table-cell bg-blue-200 text-xs px-3 py-1">4 cell</div>
            <div className="table-cell bg-blue-300 text-xs px-3 py-1">5 cell</div>
          </div>
        </div>

      <Floats />

      </div>
      
    </div>
  );
};

export default Tailwind;
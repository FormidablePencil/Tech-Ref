import React from 'react';
import {Link} from "gatsby"


const SecondPage = () => {
  return (
    <div>
    <Link to="/">index</Link>
    <br/>
    <Link to="/secondPage">secondPage</Link>
    <br/>
    <Link to="/thirdPage">thirdPage</Link>
      <div className="container mx-auto ">
        <p className="bg-gray-200 w-64 h-64 overflow-x-auto font-hairline hover:font-normal">
          <strong className="font-bold hover:font-extrabold">Without Overflow</strong>
          <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nam et deserunt ea soluta ducimus suscipit voluptate dicta odit, veniam molestias ab atque voluptates sint quam alias tenetur nostrum enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, velit veritatis aperiam libero dignissimos magni quos necessitatibus suscipit nulla. Officiis iusto impedit repudiandae, cum dolores dolor quidem consequuntur ipsum sunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit harum maiores officia blanditiis, a dolores laudantium quo iure aperiam assumenda. Iusto ea porro quidem ipsum.
        </p>
        <p className="bg-gray-200 w-64 h-64">
          <strong>Without Overflow</strong>
          <br/>
          I'm going to have to dabble in tailwind.config to learn to set up custom classes. soluta ducimusdolor quidem consequuntur ipsum sunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit harum maiores officia blanditiis, a dolores laudantium quo iure aperiam assumenda. Iusto ea porro quidem ipsum.
        </p>
      </div>
      <div className="container bg-pink-100">
        <div className="bg-red-200 w-64">
          <p>opacity-100</p>
        </div>
      </div>
    </div>
  );
};

export default SecondPage; 
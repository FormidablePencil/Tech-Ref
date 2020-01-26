import React from 'react'
//! This is a functional component that renders into the html DOM as it looks within the return()
//* difference between const and function is that function uses props in it's parameters while const doesn't and just passes {arguments} into it's parameters. Also, the const uses an arrow function where as function doesn't.
const Ninjas = ({ninjas, deleteNinja}) => {       //const is so clean and really easy to see what is being passed down from the parent components.
  return (   // ninjas = 'ninjas' property in state from Apps.js component. deleteNinja = a function that deletes the object within the state that has a corresponding id of that e.target.id.
    <div className="ninja-list">
      {                                                      //this will render everything within ninjas variable. Everything {object} will have it's own template therefore if there are 5 {objects} then map() will return 5 templates and that is what you'll see visually on the users side.
        ninjas.map(ninja => {                                //* Means to map out all the the data from the ninjas variable onto the template.
          return (                                           // We are using a method within the html replicate. 
            <div className="ninja" key={ninja.id}>           {/* //* There must be a key for every object templated */}
              <div>Name: { ninja.name }</div>                {/* //! 'ninja' is a variable that holds the variables from "ninjas" temperarily  within this map method. "ninja" is a temperary holder for proccessing the data through the map method. */}
              <div>Age: { ninja.age }</div>                  {/* //* If there is no "something=" then there is no component underneath this one. */}
              <div>Belt: { ninja.belt }</div>
              <button onClick={() => {deleteNinja(ninja.id)}}>Delete ninja</button> {/* //* onClick then fire the function deleteNinja with the (argument) of ninja.id. Reminding again that there's no "this.prop" because it's a const thus the arguments are passed into the parameters ahead of time. const is just much cleaner than props. */}
            </div>
          )
        })
      }
    </div>
  );
}

export default Ninjas
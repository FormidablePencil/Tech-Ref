import React from 'react'
import Rainbow from '../hoc/Rainbow' // importing the file to super charge the component
//* So Basically we intercept props tunnel with another component when we supercharge it, (HOC).
const Contact = (props) => {  //enabling supercharge with props. Remember that the other side Rainbow.js must have {...props} passed into it.
  // console.log(props);
  // setTimeout(() => {
  //   props.history.push('/about')
  // }, 2000);  //* programatic redirect. Router is connected to this component/page so it allows us to do this as long as we use (props) as done above. If the component doesn't have a Router attached to it through the parent component then if we wanted it to work we would have to super charge the component as demonstrated in the Navbar.js component.
  return ( 
    <div>
      <div className="container">
        <h4 className="center">Contact</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repudiandae repellat illo magni eligendi cupiditate voluptates eius nam voluptate. Incidunt nihil ullam quae quia officia quaerat, deserunt eligendi explicabo totam?</p>
      </div>
    </div>
  )
}

export default Rainbow(Contact) //supercharged it
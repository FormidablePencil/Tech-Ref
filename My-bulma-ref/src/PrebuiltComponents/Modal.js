//This is where I'll have the function to change the elements from display: block; to display: none; We are using no state or no props. We might even move everything from Modal.js to this file... Likely so. Think about it. But now the question is how do I pass down things into class components? yes we can through props by just doing this: this.props.addNinja. this refers to the class, props.addNinja is addNinja={} from the higher component. I believe that the higher up component can be a simple functional component. It should work or else I may have to change to to class components.
import React from 'react'
import styled from "@emotion/styled"

//for creating event handler functions we must have a class that holds the functions and just pass them into the functional components. If we are just changing an element from display: block; to display: none; then we wont need to utilize state and props. This is gatsby so static websites with minimal functionalities is the ideal reason for gatsby and is why it was created. 
// If I want my website to have some complex functionalities then we are fucked. Lol, again working with coding and thinking about family issues. React is the framework which is all you need and that I have under control.

const MessageAligning = styled.div`
  margin-top: 50%;
`

const Modal = (props) => {  //* Make it so that when pressed in esc key then it the modal element would disapear.

  return ( 
    <>
      <span className="button is-warning" onClick={props.openClick}>{props.modalParagraph}</span>
      <div className="modal" id="page-modal">
        <div className="modal-background" onClick={props.closeClick}></div>
        <div className="modal-content">
          <MessageAligning>
          <div className="message is-info">
            <div className="message-header">
              Look at that, it fucken worked!
              <button className="delete" onClick={props.closeClick}></button>
            </div>
            <div className="message-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas natus, eum quae libero, ipsum vero optio temporibus ut sunt rerum possimus ducimus quis ullam molestias quia quod magnam adipisci quisquam.
            </div>              
          </div>
          </MessageAligning>
        </div>
        <button onClick={props.closeClick} className="modal-close is-large" aria-label="close"></button>
      </div>
    </>
  )
}

export default Modal
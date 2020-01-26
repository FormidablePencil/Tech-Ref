import React, { Component } from 'react'
import { Link } from 'react-router-dom'   //Rather than using href that sends a request and get a page from the server which is unecessarily slow when could just use Link so React could intercept it and render the right component/page without the wait on the server. 
import Pokeball from '../pokeball.png'
import { connect } from 'react-redux'
import axios from 'axios' //must install axios through the terminal first
//* overview: 
    //* const { posts } = this.props; is the same as const posts = this.props.posts; 
    //* mapped a data varaible with a template
    //* template must contain a key={post.id} 
    //* Then when we can use the mapped out variable to render based on what is the data and how much there is.
//? Qs:
  //?  let id = this.props.match.params.post_id; idk what this is?
  //? 
  //? 

class Home extends Component {
  //! We don't use this api or the lifecylce hook in this project but it's here for referencing purposes.
  componentDidMount(){ //As the name suggests, after all the elements of the page is rendered correctly, this method is called. This is called a lifecycle hook.
    let id = this.props.match.params.post_id;  //? I got no fucken idea wtf this is
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    .then(res => {  //.then meaning once the data is recieved.
      console.log(res)
      this.setState({
        posts: res.data.slice(0,10)
      })
    })
  }
  
  render(){
    const { posts } = this.props  //! post is stored in redux therefore you won't see state here. rootReducer.js is the redux file with all the state data
    const postList = posts.length ? (     //* ternary oporator if there's no post then it'll return a code of text saying there are no post.
      posts.map(post => {                   //* map out all the posts meaning to take the template, fill in the data from the data stored in objects in posts variable.
        return (
          <div className="post card" key={post.id}> {/* //* Each element must have a unique key for react to be able to identify what element is what and where it'll be used. key={post.id} */}
            <img src={Pokeball} alt="A Pokeball" />
            <div className="card-content">
              <Link to={'/' + post.id}> {/* //! what we see is what will return from the map, the template but what is stored is actually everything that is set to the template. Therefore the user isn't clicking on what the map return displays here: <Link to={'/' + post.id}> but <Link to={hamburger}> for instance. It depends in what scope of {object data} did you click on. */}
              {/* the span tag became a link and whenever it is clicked it directs you to a page that's associated a certain id to it. */}
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts to show</div>
    );

    return (
      <div>
        <div className="container home">
          <h4 className="center">Home</h4>
          {postList}       
        </div>
      </div>
    )
  }
}
//?                                             What is this code of Redux?
const mapStateToProps = (state) => {            //* This is the link between this component and rootReducer.js
  return {
    posts: state.posts
  }
}           

export default connect(mapStateToProps)(Home)
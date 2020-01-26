import React, { Component } from 'react'
import { connect } from 'react-redux'   //* Connect is used to connect redux to any desired component.
import { deletePost } from '../actions/postActions' //!This is the action

class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id);  //* This references into a different component. I'll have to look into that to understand the complete picture.
    this.props.history.push('/'); //* So when onClick to delete a post the page goes back to the home page.
  }
  render() { //So this is the template for every {post}
    const post = this.props.post ? ( //* Ternary operator. If something is within this.props.post then return a template with the props filled into.
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>
            Delete Post
          </button>
        </div>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );

    return (
      <div className="container">
        {post}
      </div>
    )
  }
}
    //! Don't get intimidated by these words. They are just names to variables and have a special meaning to it other than what's been assigned to it from it's code block.
const mapStateToProps = (state, ownProps) => {    //This is for redux or api for sure. //*What is ownProps.. Self explanitory. 
  let id = ownProps.match.params.post_id;  
  return {
    post: state.posts.find(post => post.id === id)
  }
}

const mapDispatchToProps = (dispatch) => {    
  return {
    deletePost: (id) => dispatch(deletePost(id))  //* deletePost is an action that rests in the postAction.js file.
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post) //* The first two variables wrap around Post which gives Post.js access to the Redux reducer.

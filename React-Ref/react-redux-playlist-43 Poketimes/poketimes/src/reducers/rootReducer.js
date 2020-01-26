const initState = {
  posts: [
    {id: '1', title: 'Squirtle Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
    {id: '2', title: 'Charmander Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
    {id: '3', title: 'a Helix Fossil was Found', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'}
  ]
}



const rootReducer = (state = initState, action) => {
  console.log(action);
  if(action.type === 'DELETE_POST'){  //action aka dispatch. 
   let newPosts = state.posts.filter(post => {    // Deleting things from state is kjust filtering everything except the action.id
     return post.id !== action.id
   });
   return {
     ...state, //we don't want "posts", the new state to over ride the whole state because then there won't be nothing else besides that so we '...state' in there. '...' is the spread operator.
     posts: newPosts
   }
  }
  return state;
}

export default rootReducer
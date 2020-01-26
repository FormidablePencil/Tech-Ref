export const deletePost = (id) => {  //! this is th action by which a reducer evaluates.
  return {
    type: 'DELETE_POST',
    id
  }
}
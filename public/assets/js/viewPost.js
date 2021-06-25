//here we render the post by id that the user clicked on, 
// save the post id in local storage since we are going across multiple pages
let postId = localStorage.getItem('postId')

axios.get(`/api/posts/${postId}`, {
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
})
.then(({ data }) => {
  // console.log(data)
  //fill in the datafields with post data
})
.catch(err => console.log(err))
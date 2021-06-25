//here we render the post by id that the user clicked on, 
// save the post id in local storage since we are going across multiple pages
let postId = localStorage.getItem('postId')

//get post by id call
axios.get('/api/posts/${postId}')
.then(res => console.log(res))
.catch(err => console.log(err))
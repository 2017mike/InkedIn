//here we render the post by id that the user clicked on, 
// save the post id in local storage since we are going across multiple pages
let postId = localStorage.getItem('postId')

axios.get(`/api/posts/${postId}`, {
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
})
.then(({ data }) => {
  console.log(data)
  //get req or offer
  let postType = 'Offer'
  if(data.type) {
    postType = 'Request'
  }
  //render post
  document.getElementById('imageUrl').src = data.imgUrl
  document.getElementById('postType').innerHTML = postType
  document.getElementById('postBody').innerHTML = data.body
  document.getElementById('contactNumber').innerHTML = 'Phone Number: ' + data.contactNumber
  document.getElementById('contactEmail').innerHTML = 'Email: ' + data.contactEmail
})
.catch(err => console.log(err))
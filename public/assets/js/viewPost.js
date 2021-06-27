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
  //get req or offer
  let postType = data.type ? 'Request' : 'Offer'
  //render post
  document.getElementById('imageUrl').src = data.imgUrl
  document.getElementById('postType').innerHTML = postType
  document.getElementById('postBody').innerHTML = data.body
  document.getElementById('contactNumber').innerHTML = 'Phone Number: ' + data.contactNumber
  document.getElementById('contactEmail').innerHTML = 'Email: ' + data.contactEmail
    //render the comment onto the page
  data.comments.forEach(comment => {
    document.getElementById('comments').innerHTML += `
    <li class="collection-item #212121 grey darken-4 white-text">${comment.body}</li>
    `
  })

})
.catch(err => console.log(err))

document.getElementById('addComment').addEventListener('click', event => {
  event.preventDefault()
  let comment = {
    body: document.getElementById('commentField').value,
    pid: postId
  }
  //create comment call
  axios.post('/api/comments', comment, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
  .then(({data}) => {
    console.log(data)
    document.getElementById('commentField').value = ''
    window.location = '/post'
  }) 
  .catch(err => console.log(err))
})
//listener for the button create
document.getElementById('create').addEventListener('click', event => {
  event.preventDefault()
  //get new post info
  console.log(document.getElementById('type').value)
  let newPost = {
    type: document.getElementById('type').value,
    imgUrl: document.getElementById('imageURL').value,
    body: document.getElementById('description').value,
    contactEmail: document.getElementById('email').value,
    contactNumber: document.getElementById('contactNumber').value 
  }


  axios.post('/api/posts', newPost, {
    headers: {
      'Authorization': `Bearer ${ localStorage.getItem('token')}`
    }
  })
  .then(res => {
    console.log(res)
    window.location = '/home'
  })
})
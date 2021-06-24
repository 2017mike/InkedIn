//listener for the button create
document.getElementById('create').addEventListener('click', event => {
  event.preventDefault()
  //get new post info

  let newPost = {
    type: document.getElementById('type').value,
    imgUrl: document.getElementById('imgUrl').value,
    body: document.getElementById('body').value,
    contactEmail: document.getElementById('contactEmail').value,
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
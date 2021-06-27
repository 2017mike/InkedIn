//here we render the users profile
const renderProfile = () => {
  axios.get('/api/posts/users', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
  .then(({ data }) => {
    console.log(data)
    let postType = ''
    data.forEach(post => {
      postType = post.type ? 'Request' : 'Offer'
      //grab each post and render it to page
      document.getElementById('profileCards').innerHTML += `
      <div class="col m4 s12">
        <div class="card #424242 grey darken-3">
          <div class="card-image waves-effect">
            <img class='activator responsive-img'
              src=${post.imgUrl}>
          </div>
          <div class="card-content center-align">
            <span class="card-title activator white-text text-darken-4">${postType}</span>
            <a class="waves-effect waves-light btn viewPost black">View</a>
            <a class="waves-effect waves-light btn deletePost red" data-id=${post.id}>Delete</a>
          </div>
          <div class="card-reveal">
            <div class="card-title grey-text text-darken-4">
              <i class="material-icons right">close</i>
            </div>
            <img class='image-reveal responsive-img'
              src=${post.imgUrl} alt="">
          </div>
        </div>
      </div>
      `
      //end forEach
    })
  })
  .catch(err => console.log(err))
}

renderProfile()

//delete post
document.addEventListener('click', event => {
  if(event.target.classList.contains('deletePost')) {
    axios.delete(`/api/posts/${event.target.dataset.id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
})
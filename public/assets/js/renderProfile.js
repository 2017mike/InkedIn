//here we render the users profile
const renderProfile = () => {
  axios.get('/api/posts/users', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
  .then(({ data }) => {
    console.log(data)
    let postType = 'Offer'
    data.forEach(post => {
      if (data.type) {
        postType = 'Request'
      }
      //grab each post and render it to page
      document.getElementById('profileCards').innerHTML += `
      <div class="col s12 m4">
        <div class="card #424242 grey darken-3">
          <div class="card-image waves-effect">
            <img class='activator responsive-img' src="${post.imgUrl}" alt="image not found">
          </div>
          <div class="card-content">
            <span class="card-title activator white-text text-darken-4">${postType}</span>
            <a class="waves-effect waves-light btn viewPost black" data-id=${post.id}>view</a>
          </div>
          <div class="card-reveal">
            <div class="card-title grey-text text-darken-4">
            <i class="material-icons right">close</i>
            </div>
            <img class='image-reveal responsive-img' src="${post.imgUrl}" alt="image not found">
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
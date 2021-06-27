const renderCards = () => {
  axios.get('/api/posts', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
  .then(({ data }) => {
    let postType = ''
    data.forEach(post => {
      if(post.type == true) {
        postType = 'Request'
      } else {
        postType = 'Offer'
      }
      //grab each post and render it to page
      document.getElementById('renderCards').innerHTML += `
      <div class="col s12 m4">
        <div class="card #424242 grey darken-3">
          <div class="card-image waves-effect">
            <img class='activator responsive-img' src="${post.imgUrl}" alt="image not found">
          </div>
          <div class="card-content center-align">
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

//listener to view post
document.addEventListener('click', event => {
  event.preventDefault()
  if(event.target.classList.contains('viewPost')) {
    //grab post id set it to local storage then go to post page
    localStorage.setItem('postId', event.target.dataset.id)
    window.location = '/post'
  }
})


renderCards()


//addPost button
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elems, options);
});

document.getElementById('addNewPost').addEventListener('click', event => {
  window.location = '/create'
})

M.AutoInit();
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, options);
})


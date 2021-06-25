const renderCards = () => {
  axios.get('/api/posts', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
  .then(({ data }) => {
    // console.log(data)
    let postType = 'Offer'
    data.forEach(post => {
      if(postType) {
        postType = 'Request'
      }
      //grab each post and render it to page
      document.getElementById('renderCards').innerHTML += `
      <div class="col s4">
        <div class="card">
          <div class="card-image waves-effect">
            <img class='activator' src="${post.imgUrl}" alt="image not found">
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">${postType}</span>
            <btn class="viewPost" data-id=${post.id}>See post</btn>
          </div>
          <div class="card-reveal">
            <span' class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
            <img class='image-reveal' src="${post.imgUrl}" alt="image not found">
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


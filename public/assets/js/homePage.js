
//render pages
const renderPosts = () => {

  axios.get('/api/posts', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
  .then(({ data }) => {
    let postType = 'Offer'
    // console.log(data)
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
            <p><a id="viewPost" href="#">See Post</a></p>
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






renderPosts()

//render pages
const renderPosts = () => {

  axios.get('/api/posts', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
  .then(({ data }) => {
    // console.log(data)
    data.forEach(post => {
      //grab each post and render it to page
      // console.log(post.body)
      
    })
  })
  .catch(err => console.log(err))
}



//listener to view post






renderPosts()
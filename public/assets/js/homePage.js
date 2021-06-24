
//render pages
const renderPosts = () => {

  axios.get('/api/posts', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
  .then(({ data }) => {
    console.log(data)
  })
  .catch(err => console.log(err))
}



//listener to view post






renderPosts()
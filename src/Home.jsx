import React from 'react'
import Blogs from './Blogs'
import useFetch from './useFetch'

const Home = () => {

  const {data:blogs, isLoanding, error} = useFetch('http://localhost:8000/blogs');

  return (
    <div className='home'>
      {isLoanding && <div>Loanding...</div>}
      {error && <div>{error}</div>}
      {blogs && <Blogs blogs={blogs} title='All Blogs' />}
    </div>
  )
}

export default Home
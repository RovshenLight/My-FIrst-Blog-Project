import React from 'react'
import useFetch from './useFetch'
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const BlogDetailes = () => {

  const { id } = useParams();
  const { data: blog, isLoanding, error } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();
  
  const hanldeDelete = () => {
    fetch('http://localhost:8000/blogs/' + id, {
      method: 'DELETE'
    })
    .then(() => {
      history.push('/')
    })
  }

  return (
    <div className='blog-details'>
      {isLoanding && <div>Loanding...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={hanldeDelete}>Delete</button>
        </article>
      )}
    </div>
  )
}

export default BlogDetailes
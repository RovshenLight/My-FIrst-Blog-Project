import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const NewBlog = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoanding, setIsLoanding] = useState(false);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    const blog = {title, body, author}
    setIsLoanding(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {"Content-Type": "applicathion/json"},
      body: JSON.stringify(blog)
    })
    .then(() => {
      setIsLoanding(false);
      history.push("/");
    })

  } 

  return (
    <div className='create'>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input type="text" required value={title} onChange={(event) => setTitle(event.target.value)}/>
        <label>Blog Body:</label>
        <textarea required value={body} onChange={(event) => setBody(event.target.value)}></textarea>
        <label>Blog Author:</label>
        <input type="text" required value={author} onChange={(event) => setAuthor(event.target.value)}/>
        {!isLoanding && <button>Add Blog</button>}
        {isLoanding && <button>Adding Blog...</button>}
        <div className='add_blog'>
          <h2>{title}</h2>
          <p>{body}</p>
          <p>{author}</p>
        </div>
      </form>
    </div>
  )
}

export default NewBlog
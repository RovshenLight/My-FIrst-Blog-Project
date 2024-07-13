import React from 'react'
import { Link } from 'react-router-dom'

const NotFonded = () => {
  return (
    <div className='error'>
      <div>Sorry This Page Not Founded</div>
      <Link to="/">Back To HomePage</Link>
    </div>
  )
}

export default NotFonded
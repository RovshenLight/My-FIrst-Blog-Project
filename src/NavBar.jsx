import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar'>
      <div><Link to='/'>Blogs</Link></div>
      <ul className='links'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create">New Blog</Link></li>
      </ul>
    </div>
  )
}

export default NavBar
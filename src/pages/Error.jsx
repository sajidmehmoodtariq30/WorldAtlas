import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <h1>Oops! An error occurred</h1>
      <p>The page you are looking for does not exist.</p>
      <NavLink to='/'><button>GO Back</button></NavLink>
    </div>
  )
}

export default Error

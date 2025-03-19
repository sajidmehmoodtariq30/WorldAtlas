import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center animate-pulse mb-8">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl">Oops! The page you're looking for doesn't exist.</p>
      </div>
      <NavLink
        to="/"
        className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300"
      >
        Go Back Home
      </NavLink>
    </div>
  )
}

export default Error

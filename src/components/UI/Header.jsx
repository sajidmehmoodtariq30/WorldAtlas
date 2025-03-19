import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="flex items-center justify-around h-20 py-4 px-10 bg-gray-800 shadow-lg">
      {/* Brand Name */}
      <div className="text-2xl font-bold text-white">My Website</div>

      {/* Mobile Menu Icon */}
      <div className="text-gray-300 text-2xl sm:hidden cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Desktop Links */}
      <div className="hidden sm:flex space-x-8">
        {['/', '/country', '/about', '/contact'].map((path, index) => (
          <NavLink
            key={index}
            to={path}
            className={({ isActive }) =>
              `text-lg text-gray-300 hover:text-blue-500 transition-all duration-300 ${isActive ? 'text-blue-500' : ''}`
            }
          >
            {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
          </NavLink>
        ))}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col sm:hidden absolute top-16 right-4 bg-gray-800 rounded-lg p-4 shadow-lg space-y-4">
          {['/', '/country', '/about', '/contact'].map((path, index) => (
            <NavLink
              key={index}
              to={path}
              onClick={toggleMenu}
              className="text-lg text-gray-300 hover:text-blue-500 transition-all duration-300"
            >
              {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Header

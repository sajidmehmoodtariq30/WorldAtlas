import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaLinkedin, FaGithub, FaGlobe } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-8 mt-10">
      <div className="container flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
        
        {/* Branding */}
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <FaGlobe className="text-blue-500 text-3xl" />
          <span className="text-xl font-bold text-gray-300">World Atlas</span>
        </div>
        
        {/* Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          {['/', '/about', '/contact', '/country'].map((path, index) => (
            <NavLink
              key={index}
              to={path}
              className={({ isActive }) =>
                `text-sm hover:text-blue-500 transition-all duration-300 ${isActive ? 'text-blue-500' : ''}`
              }
            >
              {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </NavLink>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/sajid-mehmood-tariq/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-all duration-300">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/sajidmehmoodtariq30" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-all duration-300">
            <FaGithub size={20} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 mt-4">
        © 2025 Sajid Mehmood Tariq. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer

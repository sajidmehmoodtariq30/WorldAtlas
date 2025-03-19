import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaGlobeAmericas } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div className="bg-main min-h-screen flex flex-col justify-center rounded-lg items-center text-center px-4">
      {/* Hero Section */}
      <motion.div 
        className="max-w-4xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-center mb-6">
          <FaGlobeAmericas className="text-blue-500 text-6xl" />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-blue-500 mb-4">
          Welcome to World Atlas
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
          Discover interesting facts, statistics, and data about countries all around the globe. 
          Navigate, explore, and enhance your knowledge with our extensive collection of country information.
        </p>
        
        <NavLink 
          to="/country" 
          className="btn-primary inline-block"
        >
          Explore Now
        </NavLink>
      </motion.div>
    </div>
  )
}

export default Home

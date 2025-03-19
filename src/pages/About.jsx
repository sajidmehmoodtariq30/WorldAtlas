import React from 'react'
import { motion } from 'framer-motion'
import { FaGlobeAmericas } from 'react-icons/fa'

const About = () => {
  return (
    <div className="bg-main min-h-screen flex flex-col justify-center items-center text-center px-4">
      <motion.div
        className="container max-w-3xl p-6 bg-gray-800 rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-center mb-6">
          <FaGlobeAmericas className="text-blue-500 text-5xl" />
        </div>

        <h1 className="heading text-4xl font-bold mb-4 text-blue-500">About World Atlas</h1>

        <p className="paragraph mb-4 text-gray-300 leading-relaxed">
          World Atlas is a comprehensive platform designed to provide detailed information about countries from all around the globe.
          Our goal is to make learning about different countries easy, accessible, and enjoyable. Whether you're a student, a traveler,
          or just curious about the world, World Atlas is here to help you explore and discover.
        </p>

        <p className="paragraph mb-4 text-gray-300 leading-relaxed">
          Built with modern web technologies, World Atlas is designed to be fast, responsive, and stylish. With user-friendly interfaces 
          and easy navigation, you can explore countries and their details with ease. Stay curious, stay informed!
        </p>

        <p className="paragraph mb-4 text-gray-300 leading-relaxed">
          Feel free to explore and connect with us on our social media platforms. Happy Exploring!
        </p>
      </motion.div>
    </div>
  )
}

export default About

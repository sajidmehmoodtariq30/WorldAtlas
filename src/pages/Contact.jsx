import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="bg-main min-h-screen flex flex-col justify-center items-center text-center px-4">
      <motion.div
        className="container max-w-3xl p-6 bg-gray-800 rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="heading text-4xl font-bold mb-6 text-blue-500">Contact Us</h1>

        <p className="paragraph mb-8 text-gray-300 leading-relaxed">
          Feel free to reach out to us if you have any queries, feedback, or suggestions. We'd love to hear from you!
        </p>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-10 mb-8">
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-blue-500 text-2xl" />
            <span className="text-gray-300">sajidmehmoodtariq5@gmail.com</span>
          </div>

          <div className="flex items-center space-x-3">
            <FaPhone className="text-blue-500 text-2xl" />
            <span className="text-gray-300">+92 32296 67494</span>
          </div>

          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-blue-500 text-2xl" />
            <span className="text-gray-300">Lahore, Pakistan</span>
          </div>
        </div>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/xdkeagkd"
          method="POST"
          className="flex flex-col space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg outline-none"
          ></textarea>

          <button
            type="submit"
            className="btn-primary mt-4"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  )
}

export default Contact

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import SearchBar from '../components/SearchBar.jsx'

const Country = () => {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all')
        setCountries(response.data)
        setLoading(false)
      } catch (error) {
        setError('Failed to fetch countries data. Please try again later.')
        setLoading(false)
      }
    }

    fetchCountries()
  }, [])

  if (loading) return <div className="text-center text-blue-500 mt-10">Loading countries...</div>
  if (error) return <div className="text-center text-red-500 mt-10">{error}</div>

  // Filtered countries based on search query
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="bg-main min-h-screen p-4">
      <div className="container mx-auto">
        <h1 className="heading text-4xl font-bold text-center mb-6 text-blue-500">Explore Countries</h1>
        
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCountries.map((country) => (
            <motion.div
              key={country.cca3}
              className="bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={country.flags.svg}
                alt={country.name.common}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h2 className="text-xl text-gray-200 font-bold mb-1">{country.name.common}</h2>
              <p className="text-gray-400 text-sm">Population: {country.population.toLocaleString()}</p>
              <p className="text-gray-400 text-sm">Region: {country.region}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Country

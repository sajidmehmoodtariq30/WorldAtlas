import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const CountryDetails = () => {
    const { countryCode } = useParams()
    const [country, setCountry] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const response = await axios.get(`https://restcountries.com/v3.1/alpha/${countryCode}`)
                setCountry(response.data[0])
                setLoading(false)
            } catch (error) {
                setError('Failed to fetch country data. Please try again later.')
                setLoading(false)
            }
        }

        fetchCountry()
    }, [countryCode])

    if (loading) return <div className="text-center text-blue-500 mt-10">Loading country details...</div>
    if (error) return <div className="text-center text-red-500 mt-10">{error}</div>

    return (
        <div className="bg-main min-h-screen p-4">
            <div className="container mx-auto text-white">
                <Link to="/" className="text-blue-400 underline mb-4 block">⬅ Back to Home</Link>
                {country && (
                    <div className="bg-gray-800 p-6 rounded-xl shadow-md">
                        <img
                            src={country.flags.svg}
                            alt={country.name.common}
                            className="w-full h-60 object-cover rounded-md mb-4"
                        />
                        <h1 className="text-3xl font-bold mb-2">{country.name.common}</h1>
                        <p><strong>Official Name:</strong> {country.name.official}</p>
                        <p><strong>Capital:</strong> {country.capital?.[0] || "N/A"}</p>
                        <p><strong>Region:</strong> {country.region}</p>
                        <p><strong>Subregion:</strong> {country.subregion}</p>
                        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                        <p><strong>Area:</strong> {country.area.toLocaleString()} km²</p>
                        <p><strong>Languages:</strong> {country.languages ? Object.values(country.languages).join(', ') : "N/A"}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CountryDetails

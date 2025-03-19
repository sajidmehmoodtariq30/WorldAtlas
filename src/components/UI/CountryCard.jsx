import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CountryCard = ({ country }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      layout
      className="bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate(`/country/${country.cca3}`)}
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
  );
};

export default CountryCard;

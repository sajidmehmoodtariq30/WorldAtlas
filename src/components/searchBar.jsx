import React from 'react'

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for a country..."
        className="w-full p-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500 transition-all"
      />
    </div>
  )
}

export default SearchBar

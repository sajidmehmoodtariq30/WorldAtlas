import React from 'react'

const SortDropdown = ({ sortType, setSortType }) => {
  return (
    <div className="mb-6">
      <select
        value={sortType}
        onChange={(e) => setSortType(e.target.value)}
        className="w-full h-10 p-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500 transition-all"
      >
        <option value="">Sort By</option>
        <option value="name-asc">Name (A-Z)</option>
        <option value="name-desc">Name (Z-A)</option>
        <option value="population-asc">Population (Low to High)</option>
        <option value="population-desc">Population (High to Low)</option>
      </select>
    </div>
  )
}

export default SortDropdown

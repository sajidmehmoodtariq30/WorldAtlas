import React from 'react';

const RegionDropdown = ({ regionFilter, setRegionFilter }) => {
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Antarctic'];

  return (
    <select
      value={regionFilter}
      onChange={(e) => setRegionFilter(e.target.value)}
      className="p-2 bg-gray-700 h-10 text-white rounded-lg outline-none border border-gray-600"
    >
      <option value="">All Regions</option>
      {regions.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
};

export default RegionDropdown;

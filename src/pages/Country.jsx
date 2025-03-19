import React, { useState } from 'react';
import useFetchCountries from '../hooks/useFetchCountries';
import CountryCard from '../components/UI/CountryCard';
import SearchBar from '../components/UI/searchBar';
import SortDropdown from '../components/UI/SortDropdown';
import RegionDropdown from '../components/UI/ReigonDropdown';

const Country = () => {
  const { allCountries, loading, error, refreshData } = useFetchCountries();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortType, setSortType] = useState('');
  const [regionFilter, setRegionFilter] = useState('');

  const filteredCountries = allCountries
    .filter(country => country.name.common.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter(country => !regionFilter || country.region === regionFilter)
    .sort((a, b) => {
      if (sortType === 'name-asc') return a.name.common.localeCompare(b.name.common);
      if (sortType === 'name-desc') return b.name.common.localeCompare(a.name.common);
      if (sortType === 'population-asc') return a.population - b.population;
      if (sortType === 'population-desc') return b.population - a.population;
      return 0;
    });

  return (
    <div className="bg-main min-h-screen p-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row space-x-6 mb-4">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <SortDropdown sortType={sortType} setSortType={setSortType} />
          <RegionDropdown regionFilter={regionFilter} setRegionFilter={setRegionFilter} />
          <button
            onClick={refreshData}
            className="ml-4 h-10 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Refresh Data
          </button>
        </div>

        {
          loading ? <div className="text-center text-blue-500">Loading countries...</div>
            :
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
              {filteredCountries.map(country => (
                <CountryCard key={country.cca3} country={country} />
              ))}
            </div>
        }
        {error && <div className="text-center text-red-500">{error}</div>}
      </div>
    </div>
  );
};

export default Country;

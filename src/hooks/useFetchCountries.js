import { useState, useEffect } from "react";
import axios from "axios";
import {
  saveToStorage,
  loadFromStorage,
  removeFromStorage,
} from "../utils/storageHelper.js";

const CACHE_KEY = "allCountries";
const CACHE_TIMESTAMP_KEY = "countriesTimestamp";
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

const useFetchCountries = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isCacheValid = () => {
    const timestamp = loadFromStorage(CACHE_TIMESTAMP_KEY);
    return timestamp && Date.now() - timestamp < CACHE_DURATION;
  };

  const fetchCountries = async () => {
    try {
      setLoading(true);

      if (isCacheValid()) {
        const cachedData = loadFromStorage(CACHE_KEY);
        if (cachedData) {
          setAllCountries(cachedData);
          setLoading(false);
          return;
        }
      }

      const response = await axios.get("https://restcountries.com/v3.1/all");
      saveToStorage(CACHE_KEY, response.data);
      saveToStorage(CACHE_TIMESTAMP_KEY, Date.now());

      setAllCountries(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch countries data.");
      setLoading(false);
    }
  };

  const refreshData = () => {
    removeFromStorage(CACHE_KEY);
    removeFromStorage(CACHE_TIMESTAMP_KEY);
    fetchCountries();
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return { allCountries, loading, error, refreshData };
};

export default useFetchCountries;

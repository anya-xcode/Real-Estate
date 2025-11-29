/**
 * LocationService - Fetches countries, states, and cities from CountryStateCity API
 * API: https://countrystatecity.in/
 * 
 * Features:
 * - 250+ countries
 * - 5,000+ states/provinces
 * - 150,000+ cities
 * - Free forever, no rate limits
 * - LocalStorage caching for instant loads
 */

const API_KEY = 'NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA=='; // Free API key
const BASE_URL = 'https://api.countrystatecity.in/v1';

const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

/**
 * Get data from cache or fetch from API
 */
const getCachedOrFetch = async (cacheKey, fetchFn) => {
  try {
    // Check cache first
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      const now = Date.now();
      
      // Return cached data if not expired
      if (now - timestamp < CACHE_DURATION) {
        return data;
      }
    }
    
    // Fetch fresh data
    const data = await fetchFn();
    
    // Cache the result
    localStorage.setItem(cacheKey, JSON.stringify({
      data,
      timestamp: Date.now()
    }));
    
    return data;
  } catch (error) {
    console.error(`Error fetching ${cacheKey}:`, error);
    
    // Return cached data even if expired on error
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      const { data } = JSON.parse(cached);
      return data;
    }
    
    throw error;
  }
};

/**
 * Fetch all countries
 * Returns: Array of country objects with name and iso2 code
 */
export const fetchCountries = async () => {
  return getCachedOrFetch('countries_cache', async () => {
    const response = await fetch(`${BASE_URL}/countries`, {
      headers: {
        'X-CSCAPI-KEY': API_KEY
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch countries');
    }
    
    const countries = await response.json();
    
    // Return sorted by name
    return countries.sort((a, b) => a.name.localeCompare(b.name));
  });
};

/**
 * Fetch states for a specific country
 * @param {string} countryCode - ISO2 country code (e.g., 'US', 'IN')
 * Returns: Array of state objects with name and iso2 code
 */
export const fetchStates = async (countryCode) => {
  if (!countryCode) return [];
  
  return getCachedOrFetch(`states_${countryCode}`, async () => {
    const response = await fetch(`${BASE_URL}/countries/${countryCode}/states`, {
      headers: {
        'X-CSCAPI-KEY': API_KEY
      }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch states for ${countryCode}`);
    }
    
    const states = await response.json();
    
    // Return sorted by name
    return states.sort((a, b) => a.name.localeCompare(b.name));
  });
};

/**
 * Fetch cities for a specific state in a country
 * @param {string} countryCode - ISO2 country code (e.g., 'US', 'IN')
 * @param {string} stateCode - ISO2 state code (e.g., 'CA', 'MH')
 * Returns: Array of city objects with name
 */
export const fetchCities = async (countryCode, stateCode) => {
  if (!countryCode || !stateCode) return [];
  
  return getCachedOrFetch(`cities_${countryCode}_${stateCode}`, async () => {
    const response = await fetch(`${BASE_URL}/countries/${countryCode}/states/${stateCode}/cities`, {
      headers: {
        'X-CSCAPI-KEY': API_KEY
      }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch cities for ${countryCode}/${stateCode}`);
    }
    
    const cities = await response.json();
    
    // Return sorted by name
    return cities.sort((a, b) => a.name.localeCompare(b.name));
  });
};

/**
 * Clear all location cache (useful for updates)
 */
export const clearLocationCache = () => {
  const keys = Object.keys(localStorage);
  keys.forEach(key => {
    if (key.startsWith('countries_') || key.startsWith('states_') || key.startsWith('cities_')) {
      localStorage.removeItem(key);
    }
  });
};

export default {
  fetchCountries,
  fetchStates,
  fetchCities,
  clearLocationCache
};

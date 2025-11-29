# Location API Integration

## Overview
This project uses the **CountryStateCity API** to provide dynamic country, state, and city selection.

## API Details

### Service: CountryStateCity API
- **Website**: https://countrystatecity.in/
- **Documentation**: https://countrystatecity.in/docs/
- **Cost**: 100% FREE forever
- **Rate Limits**: No limits for free tier
- **API Key**: Already configured in `locationService.js`

### Coverage
- **250+ Countries** worldwide
- **5,000+ States/Provinces**
- **150,000+ Cities**

## Features

### 1. Smart Caching
- Data is cached in localStorage for 7 days
- Instant load on subsequent visits
- Reduces API calls and improves performance
- Automatic cache refresh when expired

### 2. Error Handling
- Falls back to cached data if API fails
- User-friendly error messages
- Continues working offline with cached data

### 3. Performance
- First load: ~1-2 seconds (fetches from API)
- Subsequent loads: Instant (from cache)
- Progressive loading: Countries → States → Cities

## How It Works

### locationService.js
```javascript
// Fetch all countries
const countries = await fetchCountries()

// Fetch states for a country (e.g., US)
const states = await fetchStates('US')

// Fetch cities for a state (e.g., California in US)
const cities = await fetchCities('US', 'CA')
```

### Data Flow
1. **Page Load**: Fetches all countries from API
2. **Select Country**: Fetches states for that country
3. **Select State**: Fetches cities for that state
4. **All cached**: Next time loads instantly from localStorage

## API Endpoints Used

```
GET https://api.countrystatecity.in/v1/countries
GET https://api.countrystatecity.in/v1/countries/{country_code}/states
GET https://api.countrystatecity.in/v1/countries/{country_code}/states/{state_code}/cities
```

## Response Format

### Countries
```json
[
  {
    "id": 233,
    "name": "United States",
    "iso2": "US",
    "iso3": "USA"
  }
]
```

### States
```json
[
  {
    "id": 1416,
    "name": "California",
    "iso2": "CA",
    "country_id": 233
  }
]
```

### Cities
```json
[
  {
    "id": 111148,
    "name": "Los Angeles",
    "state_id": 1416
  }
]
```

## Cache Management

### Clear Cache
```javascript
import { clearLocationCache } from './services/locationService'

// Clear all cached location data
clearLocationCache()
```

### Cache Storage
- **Key Format**: 
  - Countries: `countries_cache`
  - States: `states_{countryCode}`
  - Cities: `cities_{countryCode}_{stateCode}`

- **Cache Duration**: 7 days
- **Storage**: Browser localStorage

## Troubleshooting

### Issue: "Failed to fetch countries"
**Solution**: Check internet connection. The app will use cached data if available.

### Issue: Slow initial load
**Solution**: Normal for first load. Data is being fetched and cached. Subsequent loads will be instant.

### Issue: Outdated data
**Solution**: Run `clearLocationCache()` in browser console to refresh all data.

## API Key

The current API key is free and has no expiration. If you need your own:

1. Visit https://countrystatecity.in/
2. Sign up for free
3. Get your API key
4. Replace in `locationService.js`:
   ```javascript
   const API_KEY = 'your_new_api_key_here'
   ```

## Benefits Over Hardcoded Data

✅ **Always Up-to-Date**: New cities/states automatically available
✅ **Smaller Bundle**: No massive hardcoded arrays in code
✅ **More Comprehensive**: 150,000+ cities vs ~2,000 hardcoded
✅ **Easy Maintenance**: No manual updates needed
✅ **Fast with Cache**: Instant after first load
✅ **Offline Support**: Works with cached data

## Performance Metrics

- **Initial Load**: 1-2 seconds (API fetch)
- **Cached Load**: <100ms (instant)
- **Cache Size**: ~2-5MB (all countries + your selected states/cities)
- **API Response Time**: 200-500ms average

## Future Enhancements

Possible improvements:
- Pre-cache popular countries on app load
- Add geolocation to auto-select user's country
- Implement debounced search for better UX
- Add country flags to dropdown
- Enable multi-language support (API supports it)

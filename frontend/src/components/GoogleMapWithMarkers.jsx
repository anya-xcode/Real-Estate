import React, { useEffect, useRef, useState } from 'react'

const GoogleMapWithMarkers = ({ cityData, onCityClick }) => {
  const mapRef = useRef(null)
  const googleMapRef = useRef(null)
  const markersRef = useRef([])
  const [mapError, setMapError] = useState(false)

  // City coordinates
  const getCityCoordinates = (cityName) => {
    const cityLower = cityName.toLowerCase()
    
    const cityCoordinates = {
      'delhi': { lat: 28.6139, lng: 77.2090 },
      'new delhi': { lat: 28.6139, lng: 77.2090 },
      'mumbai': { lat: 19.0760, lng: 72.8777 },
      'bangalore': { lat: 12.9716, lng: 77.5946 },
      'bengaluru': { lat: 12.9716, lng: 77.5946 },
      'hyderabad': { lat: 17.3850, lng: 78.4867 },
      'pune': { lat: 18.5204, lng: 73.8567 },
      'kolkata': { lat: 22.5726, lng: 88.3639 },
      'chennai': { lat: 13.0827, lng: 80.2707 },
      'ahmedabad': { lat: 23.0225, lng: 72.5714 },
      'jaipur': { lat: 26.9124, lng: 75.7873 },
      'lucknow': { lat: 26.8467, lng: 80.9462 },
      'kanpur': { lat: 26.4499, lng: 80.3319 },
      'nagpur': { lat: 21.1458, lng: 79.0882 },
      'indore': { lat: 22.7196, lng: 75.8577 },
      'thane': { lat: 19.2183, lng: 72.9781 },
      'bhopal': { lat: 23.2599, lng: 77.4126 },
      'visakhapatnam': { lat: 17.6868, lng: 83.2185 },
      'pimpri': { lat: 18.6298, lng: 73.7997 },
      'patna': { lat: 25.5941, lng: 85.1376 },
      'vadodara': { lat: 22.3072, lng: 73.1812 },
      'ghaziabad': { lat: 28.6692, lng: 77.4538 },
      'ludhiana': { lat: 30.9010, lng: 75.8573 },
      'agra': { lat: 27.1767, lng: 78.0081 },
      'nashik': { lat: 19.9975, lng: 73.7898 },
      'faridabad': { lat: 28.4089, lng: 77.3178 },
      'meerut': { lat: 28.9845, lng: 77.7064 },
      'rajkot': { lat: 22.3039, lng: 70.8022 },
      'varanasi': { lat: 25.3176, lng: 82.9739 },
      'srinagar': { lat: 34.0837, lng: 74.7973 },
      'amritsar': { lat: 31.6340, lng: 74.8723 },
      'chandigarh': { lat: 30.7333, lng: 76.7794 },
      'coimbatore': { lat: 11.0168, lng: 76.9558 },
      'jodhpur': { lat: 26.2389, lng: 73.0243 },
      'madurai': { lat: 9.9252, lng: 78.1198 },
      'guwahati': { lat: 26.1445, lng: 91.7362 },
      'kochi': { lat: 9.9312, lng: 76.2673 },
      'thiruvananthapuram': { lat: 8.5241, lng: 76.9366 },
      'noida': { lat: 28.5355, lng: 77.3910 },
      'greater noida': { lat: 28.4744, lng: 77.5040 }
    }
    
    for (const [key, coords] of Object.entries(cityCoordinates)) {
      if (cityLower.includes(key) || key.includes(cityLower)) {
        return coords
      }
    }
    
    return { lat: 20.5937, lng: 78.9629 } // Center of India
  }

  useEffect(() => {
    // Load Google Maps script
    const loadGoogleMaps = () => {
      if (window.google && window.google.maps) {
        initializeMap()
        return
      }

      // Check if script already exists
      const existingScript = document.querySelector('script[src*="maps.googleapis.com"]')
      if (existingScript) {
        existingScript.onload = initializeMap
        return
      }

      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyASycx1StIiq7RK8SBa-5GfdLOMUkO78DU&v=weekly`
      script.async = true
      script.defer = true
      script.onload = initializeMap
      script.onerror = () => {
        console.error('Failed to load Google Maps API. Please enable billing in Google Cloud Console.')
        setMapError(true)
      }
      
      // Suppress Google Maps error dialogs
      window.gm_authFailure = () => {
        setMapError(true)
        console.error('Google Maps authentication failed. Please check API key and enable billing.')
      }
      
      document.head.appendChild(script)
    }

    const initializeMap = () => {
      if (!mapRef.current || !window.google) return

      // Initialize map centered on India
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 22.8476, lng: 78.7 },
        zoom: 5,
        styles: [
          {
            featureType: 'all',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#444444' }]
          },
          {
            featureType: 'landscape',
            elementType: 'all',
            stylers: [{ color: '#f2f2f2' }]
          },
          {
            featureType: 'poi',
            elementType: 'all',
            stylers: [{ visibility: 'off' }]
          },
          {
            featureType: 'road',
            elementType: 'all',
            stylers: [{ saturation: -100 }, { lightness: 45 }]
          },
          {
            featureType: 'water',
            elementType: 'all',
            stylers: [{ color: '#b8d4f1' }, { visibility: 'on' }]
          }
        ]
      })

      googleMapRef.current = map

      // Add markers for cities
      updateMarkers(map)
    }

    const updateMarkers = (map) => {
      // Clear existing markers
      markersRef.current.forEach(marker => marker.setMap(null))
      markersRef.current = []

      // Add new markers
      Object.entries(cityData).forEach(([cityName, data]) => {
        const coords = getCityCoordinates(cityName)
        
        const marker = new window.google.maps.Marker({
          position: coords,
          map: map,
          title: `${cityName} - ${data.count} properties`,
          label: {
            text: cityName,
            color: 'white',
            fontSize: '12px',
            fontWeight: 'bold'
          },
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 12,
            fillColor: data.color,
            fillOpacity: 1,
            strokeColor: '#ffffff',
            strokeWeight: 2
          },
          animation: window.google.maps.Animation.DROP
        })

        marker.addListener('click', () => {
          onCityClick(cityName)
          map.panTo(coords)
          map.setZoom(10)
        })

        markersRef.current.push(marker)
      })
    }

    loadGoogleMaps()

    return () => {
      markersRef.current.forEach(marker => marker.setMap(null))
    }
  }, [cityData, onCityClick])

  if (mapError) {
    return (
      <div style={{ 
        width: '100%', 
        height: '600px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '12px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          textAlign: 'center',
          color: 'white',
          padding: '2rem',
          zIndex: 1
        }}>
          <svg style={{ width: '64px', height: '64px', marginBottom: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Interactive Map</h3>
          <p style={{ fontSize: '1rem', opacity: 0.9 }}>Explore properties across {Object.keys(cityData).length} cities</p>
        </div>
      </div>
    )
  }

  if (Object.keys(cityData).length === 0) {
    return (
      <div style={{ 
        width: '100%', 
        height: '600px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: '#f5f5f5',
        borderRadius: '12px'
      }}>
        <div style={{
          textAlign: 'center',
          color: '#666',
          fontSize: '1.1rem'
        }}>
          No properties listed yet
        </div>
      </div>
    )
  }

  return (
    <div 
      ref={mapRef} 
      style={{ 
        width: '100%', 
        height: '600px', 
        borderRadius: '12px',
        overflow: 'hidden'
      }}
    />
  )
}

export default GoogleMapWithMarkers

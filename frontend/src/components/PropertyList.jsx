import React, { useState, useEffect } from 'react'
import PropertyCard from './PropertyCard'
import ChatPanel from './ChatPanel'

export default function PropertyList({ limit = 6 }) {
	const [selectedProperty, setSelectedProperty] = useState(null)
	const [isChatOpen, setIsChatOpen] = useState(false)
	const [properties, setProperties] = useState([])
	const [loading, setLoading] = useState(true)

	const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

	useEffect(() => {
		const fetchProperties = async () => {
			try {
				setLoading(true)
				const response = await fetch(`${API_BASE_URL}/api/properties?limit=${limit}&sort=createdAt&order=desc`)
				
				if (response.ok) {
					const data = await response.json()
					setProperties(data.properties || [])
				} else {
					console.error('Failed to fetch properties')
				}
			} catch (error) {
				console.error('Error fetching properties:', error)
			} finally {
				setLoading(false)
			}
		}

		fetchProperties()
	}, [limit, API_BASE_URL])

	const handleConnectClick = (property) => {
		setSelectedProperty(property)
		setIsChatOpen(true)
	}

	const handleCloseChat = () => {
		setIsChatOpen(false)
		setSelectedProperty(null)
	}

	if (loading) {
		return (
			<div className="property-list-loading" style={{ textAlign: 'center', padding: '3rem' }}>
				<div className="loading-spinner" style={{ 
					border: '4px solid #f3f3f3',
					borderTop: '4px solid #6366f1',
					borderRadius: '50%',
					width: '50px',
					height: '50px',
					animation: 'spin 1s linear infinite',
					margin: '0 auto'
				}}></div>
				<p style={{ marginTop: '1rem', color: '#666' }}>Loading properties...</p>
			</div>
		)
	}

	if (properties.length === 0) {
		return (
			<div className="no-properties" style={{ textAlign: 'center', padding: '3rem' }}>
				<p style={{ color: '#666', fontSize: '1.1rem' }}>No properties available at the moment.</p>
			</div>
		)
	}

	return (
		<>
			<div className="property-list-grid">
				{properties.map((property, index) => (
					<PropertyCard 
						key={property.id} 
						property={property} 
						index={index}
						onConnectClick={handleConnectClick}
					/>
				))}
			</div>

			{/* Chat Panel */}
			{isChatOpen && selectedProperty && (
				<ChatPanel 
					isOpen={isChatOpen}
					property={selectedProperty}
					onClose={handleCloseChat}
				/>
			)}
		</>
	)
}

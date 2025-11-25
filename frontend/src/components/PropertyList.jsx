import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PropertyCard from './PropertyCard'
import ChatPanel from './ChatPanel'

const dummyProperties = [
	{
		id: 1,
		title: 'Modern Family House',
		price: 1250000,
		address: '123 Maple Street, Springfield',
		beds: 4,
		baths: 3,
		area: 2800,
		image: 'https://media.architecturaldigest.com/photos/55e78c2fcd709ad62e8feef9/16:9/w_656,h_369,c_limit/dam-images-resources-2012-01-modern-family-sets-modern-family-01-jay-gloria-pritchett.jpg',
		type: 'House',
		featured: true,
		description: 'Beautiful modern family house with spacious rooms and a large backyard. Perfect for families looking for comfort and style.',
		amenities: ['Pool', 'Garage', 'Garden', 'Smart Home'],
		yearBuilt: 2020,
		agent: {
			name: 'John Smith',
			phone: '+1 234-567-8900',
			email: 'john@realestate.com',
			avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80'
		}
	},
	{
		id: 2,
		title: 'Downtown Apartment',
		price: 560000,
		address: '45 Cityview Ave, Metropolis',
		beds: 2,
		baths: 2,
		area: 1150,
		image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=60',
		type: 'Apartment',
		featured: false,
		description: 'Sleek downtown apartment with stunning city views. Walking distance to restaurants, shops, and entertainment.',
		amenities: ['Gym', 'Concierge', 'Rooftop Terrace', 'Parking'],
		yearBuilt: 2019,
		agent: {
			name: 'Sarah Johnson',
			phone: '+1 234-567-8901',
			email: 'sarah@realestate.com',
			avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80'
		}
	},
	{
		id: 3,
		title: 'Cozy Countryside Cottage',
		price: 420000,
		address: '9 Willow Lane, Pleasantville',
		beds: 3,
		baths: 2,
		area: 1600,
		image: 'https://media.istockphoto.com/id/471826199/photo/french-brittany-typical-house.jpg?s=612x612&w=0&k=20&c=Izy6Ms8WytO21jJ2gtuUlylIDl38TMgZYcFZTncFAcM=',
		type: 'Cottage',
		featured: false,
		description: 'Charming cottage nestled in the countryside. Escape the hustle and bustle with this peaceful retreat.',
		amenities: ['Fireplace', 'Large Yard', 'Workshop', 'Garden'],
		yearBuilt: 2015,
		agent: {
			name: 'Mike Davis',
			phone: '+1 234-567-8902',
			email: 'mike@realestate.com',
			avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
		}
	},
	{
		id: 4,
		title: 'Luxury Penthouse',
		price: 2980000,
		address: '88 Skyline Blvd, Uptown',
		beds: 3,
		baths: 4,
		area: 3400,
		image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=60',
		type: 'Penthouse',
		featured: true,
		description: 'Exclusive penthouse with breathtaking panoramic views. Top-of-the-line finishes and amenities throughout.',
		amenities: ['Private Elevator', 'Wine Cellar', 'Home Theater', 'Spa'],
		yearBuilt: 2021,
		agent: {
			name: 'Emily Chen',
			phone: '+1 234-567-8903',
			email: 'emily@realestate.com',
			avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&q=80'
		}
	},
	{
		id: 5,
		title: 'Contemporary Villa',
		price: 1850000,
		address: '67 Ocean Drive, Coastal City',
		beds: 5,
		baths: 4,
		area: 4200,
		image: 'https://media.istockphoto.com/id/506903162/photo/luxurious-villa-with-pool.jpg?s=612x612&w=0&k=20&c=Ek2P0DQ9nHQero4m9mdDyCVMVq3TLnXigxNPcZbgX2E=',
		type: 'Villa',
		featured: false,
		description: 'Stunning oceanfront villa with direct beach access. Modern architecture meets coastal living.',
		amenities: ['Beach Access', 'Infinity Pool', 'Outdoor Kitchen', 'Sauna'],
		yearBuilt: 2018,
		agent: {
			name: 'David Martinez',
			phone: '+1 234-567-8904',
			email: 'david@realestate.com',
			avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
		}
	},
	{
		id: 6,
		title: 'Urban Loft',
		price: 750000,
		address: '12 Industrial Way, Downtown',
		beds: 2,
		baths: 2,
		area: 1800,
		image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=60',
		type: 'Loft',
		featured: false,
		description: 'Converted industrial loft with exposed brick and high ceilings. Perfect for the urban professional.',
		amenities: ['High Ceilings', 'Exposed Brick', 'Floor-to-Ceiling Windows', 'Hardwood Floors'],
		yearBuilt: 2017,
		agent: {
			name: 'Lisa Anderson',
			phone: '+1 234-567-8905',
			email: 'lisa@realestate.com',
			avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
		}
	}
]

export default function PropertyList({ showRibbon = false }) {
	const [selectedProperty, setSelectedProperty] = useState(null)
	const [isChatOpen, setIsChatOpen] = useState(false)

	const handleConnectClick = (property) => {
		setSelectedProperty(property)
		setIsChatOpen(true)
	}

	const handleCloseChat = () => {
		setIsChatOpen(false)
		setSelectedProperty(null)
	}

	return (
		<>
			<div className="property-list-grid">
				{dummyProperties.map((property, index) => (
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
					property={selectedProperty}
					onClose={handleCloseChat}
				/>
			)}
		</>
	)
}
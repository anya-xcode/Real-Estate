import React, { useState } from 'react'

const dummyProperties = [
	{
		id: 1,
		title: 'Modern Family House',
		price: '$1,250,000',
		address: '123 Maple Street, Springfield',
		beds: 4,
		baths: 3,
		area: '2,800 sqft',
		image: 'https://media.architecturaldigest.com/photos/55e78c2fcd709ad62e8feef9/16:9/w_656,h_369,c_limit/dam-images-resources-2012-01-modern-family-sets-modern-family-01-jay-gloria-pritchett.jpg',
		type: 'House',
		featured: true
	},
	{
		id: 2,
		title: 'Downtown Apartment',
		price: '$560,000',
		address: '45 Cityview Ave, Metropolis',
		beds: 2,
		baths: 2,
		area: '1,150 sqft',
		image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=60',
		type: 'Apartment',
		featured: false
	},
	{
		id: 3,
		title: 'Cozy Countryside Cottage',
		price: '$420,000',
		address: '9 Willow Lane, Pleasantville',
		beds: 3,
		baths: 2,
		area: '1,600 sqft',
		image: 'https://media.istockphoto.com/id/471826199/photo/french-brittany-typical-house.jpg?s=612x612&w=0&k=20&c=Izy6Ms8WytO21jJ2gtuUlylIDl38TMgZYcFZTncFAcM=',
		type: 'Cottage',
		featured: false
	},
	{
		id: 4,
		title: 'Luxury Penthouse',
		price: '$2,980,000',
		address: '88 Skyline Blvd, Uptown',
		beds: 3,
		baths: 4,
		area: '3,400 sqft',
		image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=60',
		type: 'Penthouse',
		featured: true
	},
	{
		id: 5,
		title: 'Contemporary Villa',
		price: '$1,850,000',
		address: '67 Ocean Drive, Coastal City',
		beds: 5,
		baths: 4,
		area: '4,200 sqft',
		image: 'https://media.istockphoto.com/id/506903162/photo/luxurious-villa-with-pool.jpg?s=612x612&w=0&k=20&c=Ek2P0DQ9nHQero4m9mdDyCVMVq3TLnXigxNPcZbgX2E=',
		type: 'Villa',
		featured: false
	},
	{
		id: 6,
		title: 'Urban Loft',
		price: '$750,000',
		address: '12 Industrial Way, Downtown',
		beds: 2,
		baths: 2,
		area: '1,800 sqft',
		image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=60',
		type: 'Loft',
		featured: false
	}
]

export default function PropertyList({ showRibbon = false }) {
	const [setHoveredCard] = useState(null)

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{dummyProperties.map((property, index) => (
				<article 
					key={property.id}
					className="group relative bg-white rounded-2xl shadow-medium hover:shadow-xl transition-all duration-500 overflow-hidden animate-scale-in"
					style={{animationDelay: `${index * 0.1}s`}}
					onMouseEnter={() => setHoveredCard(property.id)}
					onMouseLeave={() => setHoveredCard(null)}
				>
					{/* Featured Ribbon */}
					{showRibbon && property.featured && (
						<div className="absolute top-4 left-4 z-10">
							<span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
								Featured
							</span>
						</div>
					)}

					{/* Image Container */}
					<div className="relative overflow-hidden">
						<img
							src={property.image}
							alt={property.title}
							loading="lazy"
							onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://via.placeholder.com/1200x800?text=Image+Unavailable'; }}
							className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
						/>
						
						{/* Gradient Overlay */}
						<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
						
						{/* Property Type Badge */}
						<div className="absolute top-4 right-4">
							<span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
								{property.type}
							</span>
						</div>

						{/* Quick Actions */}
						<div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
							<button className="bg-white/90 backdrop-blur-sm text-gray-800 p-2 rounded-full hover:bg-white transition-colors duration-200 shadow-lg">
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
								</svg>
							</button>
							<button className="bg-white/90 backdrop-blur-sm text-gray-800 p-2 rounded-full hover:bg-white transition-colors duration-200 shadow-lg">
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
								</svg>
							</button>
						</div>
					</div>

					{/* Card Content */}
					<div className="p-6">
						{/* Price */}
						<div className="mb-3">
							<span className="text-3xl font-display font-bold text-gray-900">
								{property.price}
							</span>
						</div>

						{/* Title */}
						<h3 className="text-xl font-display font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
							{property.title}
						</h3>

						{/* Address */}
						<p className="text-gray-600 mb-4 flex items-center">
							<svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
							{property.address}
						</p>

						{/* Property Details */}
						<div className="flex items-center gap-6 mb-6 text-gray-600">
							<div className="flex items-center">
								<svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
								</svg>
								<span className="font-medium">{property.beds} beds</span>
							</div>
							<div className="flex items-center">
								<svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M10.5 3L12 2l1.5 1H21v6H3V3h7.5z" />
								</svg>
								<span className="font-medium">{property.baths} baths</span>
							</div>
							<div className="flex items-center">
								<svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
								</svg>
								<span className="font-medium">{property.area}</span>
							</div>
						</div>

						{/* Action Buttons */}
						<div className="flex gap-3">
							<button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-200">
								View Details
							</button>
							<button className="px-4 py-3 border-2 border-gray-200 text-gray-700 hover:border-blue-300 hover:text-blue-600 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-200">
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
								</svg>
							</button>
						</div>
					</div>

					{/* Hover Effect Border */}
					<div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300 pointer-events-none" />
				</article>
			))}
		</div>
	)
}
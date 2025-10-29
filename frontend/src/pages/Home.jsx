import React, { useState } from 'react'
import PropertyList from '../components/PropertyList'

export default function Home() {
	const [activeTab, setActiveTab] = useState('Buy')

	return (
		<div className="min-h-screen bg-white">
			{/* Global navbar is rendered at the app level; no local navbar here */}

			{/* Hero Section */}
			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						{/* Left Side - Image */}
						<div className="animate-slide-in-left">
							<div className="relative overflow-hidden rounded-2xl shadow-xl">
								<img
									src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
									alt="Modern Interior Design"
									className="w-full h-96 object-cover transition-transform duration-700 hover:scale-105"
								/>
								{/* Overlay gradient */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
							</div>
						</div>

						{/* Right Side - Content */}
						<div className="animate-slide-in-right">
							{/* Brand */}
							<div className="mb-6">
								<h1 className="text-4xl font-bold text-gradient mb-2">RealEstate</h1>
								<p className="text-gray-500 text-lg">Finding Your Dream Home</p>
							</div>

							{/* Category Badge */}
							<div className="mb-6">
								<span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
									BUY A HOME
								</span>
							</div>

							{/* Main Headline */}
							<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
								Find, Buy & Own Your Dream Home
							</h2>

							{/* Description */}
							<p className="text-lg text-gray-600 mb-8 leading-relaxed">
								Explore from Apartments, land, builder floors, villas and more. Find the perfect property that matches your lifestyle and budget.
							</p>

						{/* Search Section */}
						<div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md mb-8">
							{/* Tabs */}
							<div className="flex flex-wrap items-center gap-2 mb-4">
								{['Buy', 'Rent', 'New Launch', 'Commercial'].map((tab) => (
									<button
										key={tab}
										onClick={() => setActiveTab(tab)}
										className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
											activeTab === tab
												? 'bg-blue-600 text-white border-blue-600 shadow-md'
												: 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
										}`}
									>
										{tab}
									</button>
								))}
							</div>

							{/* Unified search row - rounded pill with attached button */}
							<div className="flex items-stretch gap-3">
								<div className="flex flex-1 items-center border border-gray-300 rounded-full overflow-hidden">
									<input
										type="text"
										placeholder="Search by city, locality or project"
										className="flex-1 px-5 py-3 border-0 focus:outline-none"
									/>
								</div>
								<button className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md transition-colors">
									Search
								</button>
							</div>
						</div>

							{/* CTA Button */}
							<button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
								Explore Buying Options
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Section */}
			<section className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Featured Properties
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Discover our handpicked selection of premium properties across India
						</p>
					</div>
					<PropertyList />
				</div>
			</section>

			{/* Cities Section */}
			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Popular Cities
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Explore properties in India's most sought-after locations
						</p>
					</div>
					
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{ name: 'Delhi / NCR', count: '237,000+', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80' },
							{ name: 'Mumbai', count: '67,000+', image: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&w=600&q=80' },
							{ name: 'Bangalore', count: '70,000+', image: 'https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=600&q=80' },
							{ name: 'Hyderabad', count: '35,000+', image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=600&q=80' },
							{ name: 'Pune', count: '60,000+', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=600&q=80' },
							{ name: 'Kolkata', count: '41,000+', image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=600&q=80' }
						].map((city) => (
							<div
								key={city.name}
								className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
							>
								<img
									src={city.image}
									alt={city.name}
									className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
								<div className="absolute bottom-6 left-6 text-white">
									<h3 className="text-2xl font-bold mb-2">{city.name}</h3>
									<p className="text-lg opacity-90">{city.count} properties</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
						Ready to Find Your Dream Home?
					</h2>
					<p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
						Join thousands of satisfied customers who found their perfect property with us
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-colors duration-300">
							Start Searching
						</button>
						<button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-xl transition-colors duration-300">
							Contact Us
						</button>
					</div>
				</div>
			</section>
		</div>
	)
}
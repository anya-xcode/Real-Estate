import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PropertyList from '../components/PropertyList'
import GoogleMapWithMarkers from '../components/GoogleMapWithMarkers'
import './Home.css'
import homeVideo from '../assets/homevideo.mp4'
import Insights from '../components/Insights'

export default function Home() {
	const navigate = useNavigate()
	const [searchQuery, setSearchQuery] = useState('')
	const [selectedCity, setSelectedCity] = useState(null)
	const [cityData, setCityData] = useState({})
	const [loading, setLoading] = useState(true)
	const [reviews, setReviews] = useState([])
	const [loadingReviews, setLoadingReviews] = useState(true)

	const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001'

	// Fetch properties and group by city
	useEffect(() => {
		const fetchCityData = async () => {
			try {
				const response = await fetch(`${API_BASE_URL}/api/properties`)
				
				if (response.ok) {
					const data = await response.json()
					const properties = data.properties || []
					
					// Group properties by city
					const cityCounts = {}
					const cityColors = [
						'#667eea', '#f87171', '#34d399', '#fbbf24', 
						'#a78bfa', '#fb923c', '#06b6d4', '#ec4899',
						'#10b981', '#f59e0b', '#8b5cf6', '#ef4444'
					]
					
					properties.forEach(property => {
						if (property.address?.city) {
							const city = property.address.city
							if (!cityCounts[city]) {
								cityCounts[city] = {
									count: 0,
									color: cityColors[Object.keys(cityCounts).length % cityColors.length],
									listings: '0'
								}
							}
							cityCounts[city].count++
							cityCounts[city].listings = `${cityCounts[city].count}`
						}
					})
					
					setCityData(cityCounts)
				}
			} catch (error) {
				console.error('Error fetching city data:', error)
			} finally {
				setLoading(false)
			}
		}

		fetchCityData()
	}, [API_BASE_URL])

	// Fetch reviews
	useEffect(() => {
		const fetchReviews = async () => {
			try {
				const response = await fetch(`${API_BASE_URL}/api/reviews?limit=3`)
				
				if (response.ok) {
					const data = await response.json()
					setReviews(data.reviews || [])
				}
			} catch (error) {
				console.error('Error fetching reviews:', error)
			} finally {
				setLoadingReviews(false)
			}
		}

		fetchReviews()
	}, [API_BASE_URL])

	const handleSearch = (e) => {
		e.preventDefault()
		if (searchQuery.trim()) {
			navigate(`/properties?search=${encodeURIComponent(searchQuery.trim())}`)
		} else {
			navigate('/properties')
		}
	}

	const stats = [
		{ number: '50K+', label: 'Happy Customers' },
		{ number: '200K+', label: 'Properties Listed' },
		{ number: '500+', label: 'Cities Covered' },
		{ number: '1000+', label: 'Verified Agents' }
	]

	const handleCityClick = (cityName) => {
		setSelectedCity(cityName)
		// Navigate to property listing page with city filter
		navigate(`/properties?city=${encodeURIComponent(cityName)}`)
	}

	const features = [
		{
			icon: (
				<svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
				</svg>
			),
			title: 'Smart Search',
			description: 'Find properties using our intelligent search with filters'
		},
		{
			icon: (
				<svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
				</svg>
			),
			title: 'Verified Listings',
			description: 'All properties are verified for authenticity and quality'
		},
		{
			icon: (
				<svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
			),
			title: 'Best Prices',
			description: 'Competitive pricing with transparent cost breakdown'
		},
		{
			icon: (
				<svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
				</svg>
			),
			title: '24/7 Support',
			description: 'Expert assistance available round the clock'
		}
	]

	return (
		<div className="home-page">
			{/* Hero Section with Video Background */}
			<section className="hero-section-home">
				<video
					autoPlay
					loop
					muted
					playsInline
					className="hero-video-bg"
					poster=""
				>
					<source src={homeVideo} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				
				<div className="hero-overlay-home"></div>
				
				<div className="hero-content-home">
					<h1 className="hero-title-home">
						Discover Your Perfect Dream Home
					</h1>
					
					<p className="hero-subtitle-home">
						Find the ideal property from our exclusive collection of premium homes, apartments, and commercial spaces
					</p>

					{/* Enhanced Search Bar */}
					<div className="search-container-home">
						{/* Search Input */}
						<form onSubmit={handleSearch} className="search-input-wrapper">
							<div className="search-icon-wrapper">
								<svg className="search-input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
								</svg>
							</div>
							<input
								type="text"
								placeholder="Search by city, locality, or project name..."
								className="search-input-home"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
							/>
							<button type="submit" className="search-button-home">
								<svg className="button-icon-home" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
								</svg>
								Search
							</button>
						</form>
					</div>

					{/* Quick Stats */}
					<div className="stats-container">
						{stats.map((stat, index) => (
							<div key={index} className="stat-item">
								<div className="stat-number">{stat.number}</div>
								<div className="stat-label">{stat.label}</div>
							</div>
						))}
					</div>
				</div>

				{/* Scroll Indicator */}
				<div className="scroll-indicator">
					<svg className="scroll-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
					</svg>
				</div>
			</section>

			{/* Popular Cities Section */}
			<section className="cities-section">
				<div className="container">
					<div className="section-header">
						<h2 className="section-title">Popular Cities</h2>
						<p className="section-subtitle">
							Discover properties in India's most sought-after cities
						</p>
					</div>

					<div className="cities-grid">
						{[
							{ name: 'Delhi/NCR', count: '50K+ Properties', img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80' },
							{ name: 'Mumbai', count: '45K+ Properties', img: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&w=800&q=80' },
							{ name: 'Bangalore', count: '40K+ Properties', img: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80' },
							{ name: 'Hyderabad', count: '35K+ Properties', img: 'https://media.istockphoto.com/id/139385604/photo/beautiful-charminar-monument-in-hyderabad-india.jpg?s=612x612&w=0&k=20&c=Q21yScf4-DF5UP39f8N1WvGUqSrhSh-wLiTjgeuWfr8=' },
							{ name: 'Pune', count: '30K+ Properties', img: 'https://media.istockphoto.com/id/1337466395/photo/shree-swaminarayan-temple-with-beautiful-blue-night-lighting-in-pune-india.jpg?s=612x612&w=0&k=20&c=8yqkvkpOTpV9MYJ9ZOmtPaHAHR_NUhSLC9vYrJkQ51M=' },
							{ name: 'Kolkata', count: '25K+ Properties', img: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800&q=80' }
						].map((city, index) => (
							<div key={index} className="city-card">
								<div className="city-image-wrapper">
									<img src={city.img} alt={city.name} className="city-image" />
									<div className="city-overlay"></div>
								</div>
								<div className="city-content">
									<h3 className="city-name">{city.name}</h3>
									<p className="city-count">{city.count}</p>
									<button 
										className="explore-city-btn"
										onClick={() => navigate(`/properties?city=${encodeURIComponent(city.name)}`)}
									>
										Explore
										<svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
										</svg>
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Featured Properties Section */}
			<section className="properties-section">
				<div className="container">
					<div className="properties-header-top">
						<div className="properties-heading">
							<h1 className="section-title">Handpicked Properties For You</h1>
							<p className="section-subtitle">
								Explore our curated selection of premium properties
							</p>
						</div>
						<Link to="/properties" className="properties-viewall">
							View All
							<span className="properties-arrow">↗</span>
						</Link>
					</div>
					
					<PropertyList limit={3} />
				</div>
			</section>


			{/* Testimonials Section */}
			<section className="testimonials-section">
				<div className="container">
					<div className="section-header">
						<h2 className="section-title">What Our Clients Say</h2>
						<p className="section-subtitle">
							Real experiences from real people
						</p>
						<Link 
							to="/add-review"
							className="add-review-btn"
						>
							<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
							</svg>
							Add Your Review
						</Link>
					</div>

					{loadingReviews ? (
						<div className="testimonials-loading">
							<div className="loading-spinner"></div>
							<p>Loading reviews...</p>
						</div>
					) : reviews.length === 0 ? (
						<div className="no-reviews">
							<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
							</svg>
							<p>No reviews yet. Be the first to share your experience!</p>
						</div>
					) : (
						<div className="testimonials-grid">
							{reviews.map((review) => (
								<div key={review.id} className="testimonial-card">
									<div className="testimonial-stars">
										{[...Array(review.rating)].map((_, i) => (
											<svg key={i} className="star-icon" fill="currentColor" viewBox="0 0 20 20">
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
										))}
									</div>
									<p className="testimonial-text">{review.text}</p>
									<div className="testimonial-author">
										<img 
											src={review.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(review.name)}&background=667eea&color=fff&size=128`} 
											alt={review.name} 
											className="author-image" 
										/>
										<div>
											<h4 className="author-name">{review.name}</h4>
											<p className="author-role">{review.role}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</section>

			{/* Features Section */}
			<section id="why-choose-us" className="features-section">
				<div className="container">
					<div className="section-header">
						<h2 className="section-title">Why Choose Us</h2>
						<p className="section-subtitle">
							Experience excellence in real estate with our comprehensive solutions and unmatched service quality
						</p>
					</div>

					<div className="features-grid-modern">
						{features.map((feature, index) => (
							<div key={index} className="feature-card-modern" style={{ animationDelay: `${index * 0.1}s` }}>
								<div className="feature-card-inner">
									<div className="feature-icon-wrapper-modern">
										{feature.icon}
										<div className="icon-bg-circle"></div>
									</div>
									<div className="feature-content-modern">
										<h3 className="feature-title-modern">{feature.title}</h3>
										<p className="feature-description-modern">{feature.description}</p>
									</div>
								</div>
								<div className="feature-card-glow"></div>
							</div>
					))}
				</div>
			</div>
		</section>
		{/* Insights Section (Real Estate Insights) */}
		<Insights />

			{/* Service Area Map Section */}
			<section className="service-area-map-section" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
				<div className="container">
				<div className="map-header">
					<div className="map-badge">
						<svg className="map-badge-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
						Our Service Area
					</div>
					<h3 className="map-title-updated">Serving Across Major Indian Cities</h3>
					<p className="map-subtitle-updated">
						We provide real estate services across India's top metropolitan areas and growing cities
					</p>
				</div>

				<div className="map-container">
					<GoogleMapWithMarkers 
						cityData={cityData}
						onCityClick={handleCityClick}
					/>
					
					{/* City Info Card */}
					{selectedCity && cityData[selectedCity] && (
						<div className="city-info-card" style={{
							position: 'absolute',
							bottom: '2rem',
							left: '2rem',
							background: 'white',
							borderRadius: '12px',
							boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
							padding: '1.5rem',
							minWidth: '280px',
							zIndex: 10
						}}>
							<div className="city-info-header">
								<div className="city-info-title">
									<div className="city-color-dot" style={{ backgroundColor: cityData[selectedCity].color }}></div>
									<h3>{selectedCity}</h3>
								</div>
								<button className="city-info-close" onClick={() => setSelectedCity(null)}>×</button>
							</div>
							<div className="city-info-content">
								<div className="city-listings-count">
									<span className="listings-number">{cityData[selectedCity].count}</span>
									<span className="listings-label">Properties Available</span>
								</div>
								<button 
									className="view-properties-btn"
									onClick={() => navigate(`/properties?city=${encodeURIComponent(selectedCity)}`)}
								>
									View All Properties
									<svg className="btn-arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
									</svg>
								</button>
							</div>
						</div>
					)}
				</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="cta-section">
				<div className="cta-content">
					<h2 className="cta-title">Ready To Find Your Dream Home?</h2>
					<p className="cta-subtitle">
						Join thousands of happy homeowners who found their perfect property with us
					</p>
				<div className="cta-buttons">
					<Link to="/properties" className="cta-btn cta-btn-primary">
						Start Your Search
						<svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>
					</Link>
					<Link to="/contact" className="cta-btn cta-btn-secondary">
						Speak with an Agent
						<svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
						</svg>
					</Link>
				</div>
				<div className="cta-buttons cta-buttons-secondary">
					<Link to="/upload" className="cta-btn cta-btn-tertiary">
						List Your Property
						<svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
						</svg>
					</Link>
				</div>
				</div>
			</section>

			{/* Footer Section */}
			<footer className="site-footer" role="contentinfo">
				<div className="container footer-container">
					<div className="footer-top">
						<div className="footer-brand">
							<h3>Real Estate</h3>
							<p>Helping you find the perfect property with trust and transparency.</p>
						</div>

					<nav className="footer-links" aria-label="Footer navigation">
						<div className="link-group">
							<h4>Quick Links</h4>
							<ul>
								<li><a href="#why-choose-us">Why Choose Us</a></li>
								<li><a href="/properties">Property Listings</a></li>
								<li><a href="/blog">Blog</a></li>
								<li><a href="/contact">Contact Us</a></li>
							</ul>
						</div>
					</nav>
					</div>

					<div className="footer-bottom">
						<p className="footer-copy">© {new Date().getFullYear()} Real Estate. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	)
}
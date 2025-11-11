import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropertyList from '../components/PropertyList'
import './Home.css'
import homeVideo from '../assets/homevideo.mp4'
import home2Image from '../assets/home2image.jpg'
import Insights from '../components/Insights'

export default function Home() {
	const [activeTab, setActiveTab] = useState('Buy')

	const stats = [
		{ number: '50K+', label: 'Happy Customers' },
		{ number: '200K+', label: 'Properties Listed' },
		{ number: '500+', label: 'Cities Covered' },
		{ number: '1000+', label: 'Verified Agents' }
	]

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
						{/* Tabs */}
						<div className="search-tabs">
							{['Buy', 'Rent', 'New Launch', 'Commercial'].map((tab) => (
								<button
									key={tab}
									onClick={() => setActiveTab(tab)}
									className={`search-tab ${activeTab === tab ? 'active' : ''}`}
								>
									{tab}
								</button>
							))}
						</div>

						{/* Search Input */}
						<div className="search-input-wrapper">
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
							/>
							<button className="search-button-home">
								<svg className="button-icon-home" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
								</svg>
								Search
							</button>
						</div>
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

			{/* Featured Properties Section */}
			<section className="properties-section">
				<div className="container">
					<div className="section-header">
						<h1 className="section-title">Handpicked Properties For You</h1>
						<p className="section-subtitle">
							Explore our curated selection of premium properties
						</p>
					</div>
					
					<PropertyList />

					<div className="text-center mt-12">
						<Link to="/properties" className="view-all-btn">
							<span>View All Properties</span>
							<svg className="btn-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</Link>
					</div>
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
									<button className="explore-city-btn">
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


			{/* Features Section */}
			<section className="features-section">
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

			{/* Testimonials Section */}
			<section className="testimonials-section">
				<div className="container">
					<div className="section-header">
						<span className="section-badge">Client Stories</span>
						<h2 className="section-title">What Our Clients Say</h2>
						<p className="section-subtitle">
							Real experiences from real people
						</p>
					</div>

					<div className="testimonials-grid">
						{[
							{
								name: 'Priya Sharma',
								role: 'Home Buyer',
								image: 'https://randomuser.me/api/portraits/women/44.jpg',
								rating: 5,
								text: 'Found my dream apartment in just 2 weeks! The platform is incredibly easy to use and the support team was amazing.'
							},
							{
								name: 'Rajesh Kumar',
								role: 'Property Investor',
								image: 'https://randomuser.me/api/portraits/men/32.jpg',
								rating: 5,
								text: 'Best real estate platform in India. Verified listings and transparent pricing made my investment decision so much easier.'
							},
							{
								name: 'Anita Desai',
								role: 'First-time Buyer',
								image: 'https://randomuser.me/api/portraits/women/68.jpg',
								rating: 5,
								text: 'As a first-time buyer, I was nervous. But the guidance and support I received was exceptional. Highly recommended!'
							}
						].map((testimonial, index) => (
							<div key={index} className="testimonial-card">
								<div className="testimonial-stars">
									{[...Array(testimonial.rating)].map((_, i) => (
										<svg key={i} className="star-icon" fill="currentColor" viewBox="0 0 20 20">
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
										</svg>
									))}
								</div>
								<p className="testimonial-text">{testimonial.text}</p>
								<div className="testimonial-author">
									<img src={testimonial.image} alt={testimonial.name} className="author-image" />
									<div>
										<h4 className="author-name">{testimonial.name}</h4>
										<p className="author-role">{testimonial.role}</p>
									</div>
								</div>
							</div>
						))}
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
								<h4>Company</h4>
								<ul>
									<li><a href="/about">About Us</a></li>
									<li><a href="/careers">Careers</a></li>
									<li><a href="/blog">Blog</a></li>
								</ul>
							</div>
							<div className="link-group">
								<h4>Support</h4>
								<ul>
									<li><a href="/help">Help Center</a></li>
									<li><a href="/contact">Contact Us</a></li>
									<li><a href="/privacy">Privacy Policy</a></li>
								</ul>
							</div>
							<div className="contact-group">
								<h4>Contact</h4>
								<p>Email: <a href="mailto:support@realestate.com">support@realestate.com</a></p>
								<p>Phone: <a href="tel:+919876543210">+91 98765 43210</a></p>
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
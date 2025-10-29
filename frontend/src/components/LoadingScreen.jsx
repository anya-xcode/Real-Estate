import React, { useState, useEffect } from 'react'

export default function LoadingScreen() {
	const [isLoading, setIsLoading] = useState(true)
	const [progress, setProgress] = useState(0)

	useEffect(() => {
		const timer = setInterval(() => {
			setProgress(prev => {
				if (prev >= 100) {
					setIsLoading(false)
					clearInterval(timer)
					return 100
				}
				return prev + 2
			})
		}, 50)

		return () => clearInterval(timer)
	}, [])

	if (!isLoading) return null

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
			{/* Animated Background */}
			<div className="absolute inset-0 overflow-hidden">
				{/* Floating particles */}
				<div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/20 rounded-full animate-float" />
				<div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-300/30 rounded-full animate-float" style={{animationDelay: '1s'}} />
				<div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-purple-300/30 rounded-full animate-float" style={{animationDelay: '2s'}} />
				<div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-pink-300/30 rounded-full animate-float" style={{animationDelay: '0.5s'}} />
				
				{/* Rotating geometric shapes */}
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
					<div className="w-32 h-32 border-2 border-white/20 rounded-full animate-rotate" />
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-blue-300/30 rounded-full animate-rotate" style={{animationDirection: 'reverse'}} />
				</div>
			</div>

			{/* Loading Content */}
			<div className="relative z-10 text-center">
				{/* Logo/Title */}
				<div className="mb-8">
					<h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
						<span className="text-gradient">RealEstate</span>
					</h1>
					<p className="text-xl text-gray-300">Finding Your Dream Home</p>
				</div>

				{/* Progress Bar */}
				<div className="w-80 mx-auto mb-8">
					<div className="bg-white/20 rounded-full h-2 overflow-hidden">
						<div 
							className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ease-out"
							style={{ width: `${progress}%` }}
						/>
					</div>
					<p className="text-white mt-2 text-sm">{progress}%</p>
				</div>

				{/* Loading Animation */}
				<div className="flex justify-center space-x-2">
					<div className="w-3 h-3 bg-white rounded-full animate-bounce" />
					<div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}} />
					<div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}} />
				</div>
			</div>
		</div>
	)
}

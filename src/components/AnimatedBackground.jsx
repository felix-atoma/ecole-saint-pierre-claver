import React from 'react'

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Spider Web Background */}
      <div className="absolute inset-0 spider-web opacity-20"></div>
      
      {/* Animated Bubbles */}
      <div className="bubble bubble-1"></div>
      <div className="bubble bubble-2"></div>
      <div className="bubble bubble-3"></div>
      <div className="bubble bubble-4"></div>
      
      {/* Floating Particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-brown rounded-full opacity-30 animate-float"></div>
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-secondary-gold rounded-full opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary-brown rounded-full opacity-50 animate-float" style={{ animationDelay: '4s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-secondary-gold rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-10 right-20 w-64 h-64 bg-gradient-to-r from-primary-brown/10 to-secondary-gold/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-l from-primary-cream/20 to-primary-brown/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
    </div>
  )
}

export default AnimatedBackground
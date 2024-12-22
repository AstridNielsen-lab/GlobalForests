import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Planting the Future Together
          </h1>
          <p className="text-xl sm:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Join our global mission to restore forests, protect biodiversity, and combat climate change through sustainable reforestation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors">
              Make a Donation
            </button>
            <a 
              href="https://radiotatuapefm.pythonanywhere.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-green-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

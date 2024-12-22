import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Impact from './components/Impact';
import Process from './components/Process';
import DonationForm from './components/DonationForm';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Impact />
      <Process />
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Support Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your contribution helps us plant more trees and restore vital ecosystems around the world.
            </p>
          </div>
          <div className="flex justify-center">
            <DonationForm />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
import React from 'react';
import { Search, MapPin } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="hero-pattern min-h-screen relative">
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-float">
            Discover Your Next Adventure
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Explore the world's most beautiful destinations with us
          </p>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Where to?</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter destination"
                    className="input-field pl-10"
                  />
                </div>
              </div>
              <button className="btn-primary flex items-center justify-center space-x-2">
                <Search className="h-5 w-5" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
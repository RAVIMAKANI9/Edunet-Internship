import React from 'react';
import { Shield, Globe, Heart } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600">We make your travel dreams come true</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: 'Safe Travel',
              description: 'Your safety is our top priority with 24/7 support',
            },
            {
              icon: Globe,
              title: 'Worldwide Coverage',
              description: 'Access to destinations across the globe',
            },
            {
              icon: Heart,
              title: 'Best Experience',
              description: 'Curated experiences for unforgettable memories',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="card p-6 text-center hover:bg-yellow-50 transition-colors duration-300"
            >
              <feature.icon className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
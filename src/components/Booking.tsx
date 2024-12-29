import React from 'react';
import { Calendar, Users, MapPin, CreditCard } from 'lucide-react';

export const Booking = () => {
  return (
    <section id="booking" className="py-20 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Book Your Trip</h2>
          <p className="text-lg text-gray-600">Quick and easy booking process</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="card p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Destination
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Where to?"
                    className="input-field pl-10"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    className="input-field pl-10"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Travelers
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select className="input-field pl-10">
                    <option>1 Person</option>
                    <option>2 People</option>
                    <option>3 People</option>
                    <option>4+ People</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Budget
                </label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select className="input-field pl-10">
                    <option>$500 - $1000</option>
                    <option>$1000 - $2000</option>
                    <option>$2000 - $3000</option>
                    <option>$3000+</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button className="btn-primary px-12">Search Flights</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
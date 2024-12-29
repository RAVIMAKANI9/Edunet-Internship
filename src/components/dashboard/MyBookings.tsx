import React from 'react';
import { Calendar, Users, MapPin } from 'lucide-react';

interface Booking {
  _id: string;
  tour: {
    title: string;
    image: string;
    duration: string;
  };
  travelDate: string;
  numberOfTravelers: number;
  totalPrice: number;
  status: string;
}

interface MyBookingsProps {
  bookings: Booking[];
  loading: boolean;
}

export const MyBookings: React.FC<MyBookingsProps> = ({ bookings, loading }) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-yellow-500 border-t-transparent"></div>
      </div>
    );
  }

  if (bookings.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-gray-900">No bookings yet</h3>
        <p className="mt-2 text-sm text-gray-600">Start exploring our tours to make your first booking!</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">My Bookings</h2>
      <div className="grid gap-6">
        {bookings.map((booking) => (
          <div key={booking._id} className="card p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-48 h-32">
                <img
                  src={booking.tour.image}
                  alt={booking.tour.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {booking.tour.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(booking.travelDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{booking.numberOfTravelers} travelers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{booking.tour.duration}</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-600">Total Price</span>
                    <p className="text-lg font-semibold text-yellow-500">
                      ${booking.totalPrice}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                    booking.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
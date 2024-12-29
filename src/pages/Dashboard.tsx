import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { bookings } from '../services/api';
import { MyBookings } from '../components/dashboard/MyBookings';
import { Profile } from '../components/dashboard/Profile';

export const Dashboard = () => {
  const [userBookings, setUserBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await bookings.getUserBookings();
        setUserBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 space-y-4">
          <nav className="space-y-2">
            <Link
              to="/dashboard"
              className="block px-4 py-2 rounded-lg hover:bg-yellow-50 hover:text-yellow-600 transition-colors"
            >
              My Bookings
            </Link>
            <Link
              to="/dashboard/profile"
              className="block px-4 py-2 rounded-lg hover:bg-yellow-50 hover:text-yellow-600 transition-colors"
            >
              Profile
            </Link>
          </nav>
        </aside>

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<MyBookings bookings={userBookings} loading={loading} />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};
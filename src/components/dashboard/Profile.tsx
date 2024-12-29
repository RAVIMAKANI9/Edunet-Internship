import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { User } from 'lucide-react';

export const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Profile</h2>
      <div className="card p-6">
        <div className="flex items-center space-x-4">
          <div className="bg-yellow-100 p-3 rounded-full">
            <User className="h-6 w-6 text-yellow-600" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">{user.fullName}</h3>
            <p className="text-sm text-gray-600">{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
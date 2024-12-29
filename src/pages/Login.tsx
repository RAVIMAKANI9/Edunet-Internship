import React from 'react';
import { Mail, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export const Login = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="card max-w-md w-full space-y-8 p-8 animate-fade-in">
        <div>
          <h2 className="text-center text-4xl font-bold text-gray-900 mb-2">Welcome back</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="font-medium text-yellow-500 hover:text-yellow-600 underline decoration-2 decoration-yellow-500/30 hover:decoration-yellow-500 transition-all duration-300">
              Sign up
            </Link>
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <Input
              label="Email address"
              type="email"
              icon={Mail}
              required
              placeholder="Enter your email"
            />
            
            <Input
              label="Password"
              type="password"
              icon={Lock}
              required
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-yellow-500 focus:ring-2 focus:ring-yellow-500 border-2 border-gray-300 rounded transition-all duration-300"
              />
              <label className="ml-2 block text-sm text-gray-900">Remember me</label>
            </div>

            <Link to="/forgot-password" className="text-sm font-medium text-yellow-500 hover:text-yellow-600 underline decoration-2 decoration-yellow-500/30 hover:decoration-yellow-500 transition-all duration-300">
              Forgot password?
            </Link>
          </div>

          <Button type="submit" fullWidth>
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
};
import React from 'react';
import { Mail, Lock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export const SignUp = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="card max-w-md w-full space-y-8 p-8 animate-fade-in">
        <div>
          <h2 className="text-center text-4xl font-bold text-gray-900 mb-2">Create an account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-yellow-500 hover:text-yellow-600 underline decoration-2 decoration-yellow-500/30 hover:decoration-yellow-500 transition-all duration-300">
              Sign in
            </Link>
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <Input
              label="Full Name"
              type="text"
              icon={User}
              required
              placeholder="Enter your full name"
            />
            
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
              placeholder="Create a password"
            />
          </div>

          <Button type="submit" fullWidth>
            Create Account
          </Button>

          <p className="text-xs text-center text-gray-600">
            By signing up, you agree to our{' '}
            <Link to="/terms" className="text-yellow-500 hover:text-yellow-600 underline decoration-2 decoration-yellow-500/30 hover:decoration-yellow-500 transition-all duration-300">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="text-yellow-500 hover:text-yellow-600 underline decoration-2 decoration-yellow-500/30 hover:decoration-yellow-500 transition-all duration-300">
              Privacy Policy
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  icon?: LucideIcon;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  icon: Icon,
  fullWidth = false,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center space-x-2 font-semibold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-opacity-50';
  const variants = {
    primary: 'bg-yellow-500 hover:bg-yellow-600 text-white shadow-yellow-500/30 focus:ring-yellow-500/50',
    secondary: 'bg-white text-gray-600 hover:text-yellow-500 hover:bg-yellow-50 border-2 border-transparent hover:border-yellow-500 focus:ring-yellow-500/30',
  };
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {Icon && <Icon className="h-5 w-5 transition-transform group-hover:rotate-12" />}
      <span>{children}</span>
    </button>
  );
};
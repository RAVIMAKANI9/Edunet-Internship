import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: LucideIcon;
}

export const Input: React.FC<InputProps> = ({
  label,
  icon: Icon,
  ...props
}) => {
  return (
    <div className="group">
      <label className="block text-sm font-medium text-gray-700 mb-1 transition-colors duration-300 group-hover:text-yellow-600">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-3 h-5 w-5 text-gray-400 transition-colors duration-300 group-hover:text-yellow-500" />
        )}
        <input
          className="w-full px-4 py-3 pl-10 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all duration-300 hover:border-yellow-400"
          {...props}
        />
      </div>
    </div>
  );
};
import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="nav-link"
    >
      {children}
    </a>
  );
};
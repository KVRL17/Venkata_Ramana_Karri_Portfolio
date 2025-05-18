import React from 'react';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4 text-center">
        {/* <p className="text-gray-400">
          &copy; {year} Karri Venkata Ramana. All rights reserved.
        </p> */}
        <div className="mt-4">
          <a 
            href="#home"
            className="text-gray-500 hover:text-indigo-400 transition-colors duration-300"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
};

import React, { ReactNode } from 'react';

interface CTAButtonProps {
  children: ReactNode;
}

const CTAButton: React.FC<CTAButtonProps> = ({ children }) => {
  return (
    <button className="bg-white text-primary-600 font-bold py-3 px-6 rounded-full shadow-md hover:bg-opacity-75 transition duration-300 ease-in-out">
      {children}
    </button>
  );
};

export default CTAButton;


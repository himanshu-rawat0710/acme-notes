import Link from 'next/link';
import React, { ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <Link href={href} className="relative text-primary-600 hover:text-primary-700 transition duration-300 ease-in-out group flex flex-col gap-2">
      <p>{children}</p>
      <span className="absolute left-0 bottom-[-4px] w-0 h-1 bg-primary-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
    </Link>
  );
};

export default NavLink;

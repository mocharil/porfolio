import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const ShinyButton = dynamic(() => import('./ShinyButton'), { ssr: false });

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold flex items-center">
            <Image src="/icons/aril.jpg" alt="Aril's logo" width={40} height={40} className="rounded-full mr-2" />
            Aril's Space Station
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-blue-400 transition duration-300">
            Home Base
          </Link>
          <Link href="#about" className="hover:text-blue-400 transition duration-300">
            Mission Brief
          </Link>
          <Link href="#experience" className="hover:text-blue-400 transition duration-300">
            Flight Log
          </Link>
          <Link href="#skills" className="hover:text-blue-400 transition duration-300">
            Space Gear
          </Link>
          <Link href="#awards" className="hover:text-blue-400 transition duration-300">
            Stellar Achievements
          </Link>
          <Link href="#contact" className="hover:text-blue-400 transition duration-300">
            Communication Hub
          </Link>
        </nav>
        <div>
          <ShinyButton className="text-sm py-2 px-4">
            Engage AI Copilot
          </ShinyButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import ChatBot from './ChatBot';

const ShinyButton = dynamic(() => import('./ShinyButton'), { ssr: false });

const Header = () => {
  const navItems = [
    { href: '/', label: 'Home Base' },
    { href: '#about', label: 'Mission Brief' },
    { href: '#experience', label: 'Flight Log' },
    { href: '#skills', label: 'Space Gear' },
    { href: '#awards', label: 'Stellar Achievements' },
    { href: '#contact', label: 'Communication Hub' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold flex items-center">
          <Image src="/icons/aril.jpg" alt="Aril's logo" width={40} height={40} className="rounded-full mr-2" />
          Aril's Space Station
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-blue-400 transition duration-300">
              {item.label}
            </Link>
          ))}
        </nav>
        <ChatBot />
      </div>
    </header>
  );
};

export default Header;
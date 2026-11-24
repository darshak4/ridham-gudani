import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/pulse') {
      return location.pathname === '/pulse' || location.pathname.startsWith('/pulse/');
    }
    return location.pathname === path;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-[#ECECEE] bg-white/80 backdrop-blur-xl transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 lg:px-8">
        {/* Brand / Logo */}
        <Link to="/" className="flex flex-none items-center gap-3 whitespace-nowrap group">
          <div className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-[#0A0A0B] text-white font-bold text-xs tracking-wider shadow-xs transition-transform group-hover:scale-105">
            RG
          </div>
          <span className="font-semibold tracking-tight text-[#0A0A0B] text-base">
            Ridham Gudani
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/event"
            className={`whitespace-nowrap text-sm font-medium transition-colors duration-150 ${
              isActive('/event')
                ? 'text-[#0A0A0B] font-semibold'
                : 'text-[#52525B] hover:text-[#0A0A0B]'
            }`}
          >
            Event
          </Link>
          <Link
            to="/pulse"
            className={`whitespace-nowrap text-sm font-medium transition-colors duration-150 ${
              isActive('/pulse')
                ? 'text-[#0A0A0B] font-semibold'
                : 'text-[#52525B] hover:text-[#0A0A0B]'
            }`}
          >
            Articles
          </Link>
          <Link
            to="/connect"
            className="whitespace-nowrap rounded-full bg-[#0A0A0B] px-5 py-2 text-sm font-medium text-white transition-all duration-150 hover:bg-[#27272A] hover:shadow-md active:scale-95"
          >
            Connect
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-[#0A0A0B] transition-colors hover:bg-gray-100 md:hidden"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-[#ECECEE] bg-white px-6 py-6 md:hidden animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-base font-medium py-1 ${
                isActive('/') ? 'text-[#0A0A0B] font-semibold' : 'text-[#52525B]'
              }`}
            >
              Home
            </Link>
            <Link
              to="/event"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-base font-medium py-1 ${
                isActive('/event') ? 'text-[#0A0A0B] font-semibold' : 'text-[#52525B]'
              }`}
            >
              Event
            </Link>
            <Link
              to="/pulse"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-base font-medium py-1 ${
                isActive('/pulse') ? 'text-[#0A0A0B] font-semibold' : 'text-[#52525B]'
              }`}
            >
              Articles (Pulse)
            </Link>
            <Link
              to="/connect"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center rounded-full bg-[#0A0A0B] py-3 text-sm font-medium text-white shadow-sm"
            >
              Connect
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}


"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: `/${locale}` },
    { name: 'About', href: `/${locale}/about` },
    { name: 'Services', href: `/${locale}/services` },
    { name: 'Projects', href: `/${locale}/projects` },
    { name: 'News', href: `/${locale}/news` },
    { name: 'Contact', href: `/${locale}/contact` },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center group">
            <Image
              src="/logo.png"
              alt="Beneficial Solutions LLC"
              width={48}
              height={48}
              className="h-12 w-auto group-hover:scale-110 transition-transform duration-300"
              priority
              sizes="48px"
            />
            <span className="ml-3 text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
              Beneficial Solutions
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                  isActive(item.href)
                    ? 'text-red-600 bg-red-50 border-b-2 border-red-600'
                    : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                }`}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Language Selector */}
          <div className="flex items-center space-x-4">
            <Link
              href={pathname.replace(`/${locale}`, `/${locale === 'en' ? 'fr' : 'en'}`)}
              className="hidden md:block px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200 border border-gray-300 rounded-md hover:border-red-300"
              aria-label={`Switch to ${locale === "en" ? "French" : "English"} language`}
            >
              {locale === 'en' ? 'FR' : 'EN'}
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden" id="mobile-menu" aria-hidden={!isOpen}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md ${
                  isActive(item.href)
                    ? 'text-red-600 bg-red-50 border-l-4 border-red-600'
                    : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                }`}
                aria-current={isActive(item.href) ? 'page' : undefined}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href={pathname.replace(`/${locale}`, `/${locale === 'en' ? 'fr' : 'en'}`)}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200"
              aria-label={`Switch to ${locale === "en" ? "French" : "English"} language`}
              onClick={() => setIsOpen(false)}
            >
              {locale === 'en' ? 'Switch to French' : 'Passer à l\'anglais'}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 
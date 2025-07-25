'use client';

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
    <nav
      className="fixed top-0 z-50 w-full bg-white shadow-lg"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="group flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/logo.png"
              alt="Beneficial Solutions LLC"
              width={48}
              height={48}
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-110"
              priority
              sizes="48px"
            />
            <span className="ml-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-red-600">
              Beneficial Solutions
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'border-b-2 border-red-600 bg-red-50 text-red-600'
                    : 'text-gray-700 hover:bg-red-50 hover:text-red-600'
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
              href={pathname.replace(
                `/${locale}`,
                `/${locale === 'en' ? 'fr' : 'en'}`
              )}
              className="hidden rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:border-red-300 hover:text-red-600 md:block"
              aria-label={`Switch to ${locale === 'en' ? 'French' : 'English'} language`}
              onClick={() => setIsOpen(false)}
            >
              {locale === 'en' ? 'FR' : 'EN'}
            </Link>

            {/* Mobile menu button */}
            <button
              className="rounded-md p-3 text-gray-700 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 md:hidden"
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation & Overlay */}
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black bg-opacity-40 transition-opacity duration-300 md:hidden"
              aria-hidden="true"
              onClick={() => setIsOpen(false)}
            />
            <div
              className="animate-slideDown fixed left-0 right-0 top-16 z-50 border-t bg-white shadow-lg md:hidden"
              id="mobile-menu"
              aria-modal="true"
              role="dialog"
            >
              <div className="flex flex-col space-y-2 px-4 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block rounded-md px-4 py-4 text-lg font-medium ${
                      isActive(item.href)
                        ? 'border-l-4 border-red-600 bg-red-50 text-red-600'
                        : 'text-gray-700 hover:bg-red-50 hover:text-red-600'
                    }`}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href={pathname.replace(
                    `/${locale}`,
                    `/${locale === 'en' ? 'fr' : 'en'}`
                  )}
                  className="block w-full px-4 py-4 text-left text-lg font-medium text-gray-700 transition-colors duration-200 hover:text-red-600"
                  aria-label={`Switch to ${locale === 'en' ? 'French' : 'English'} language`}
                  onClick={() => setIsOpen(false)}
                >
                  {locale === 'en' ? 'Switch to French' : "Passer à l'anglais"}
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

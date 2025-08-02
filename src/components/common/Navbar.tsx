'use client';

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import ErrorBoundary from './ErrorBoundary';

function NavbarContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isToggling, setIsToggling] = useState(false);
  const [lastPathname, setLastPathname] = useState<string>('');
  const locale = useLocale();
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const t = useTranslations('Navbar');

  // Memoized navigation array to prevent unnecessary re-renders
  const navigation = useMemo(
    () => [
      { name: t('home'), href: `/${locale}` },
      { name: t('about'), href: `/${locale}/about` },
      { name: t('services'), href: `/${locale}/services` },
      { name: t('projects'), href: `/${locale}/projects` },
      { name: t('news'), href: `/${locale}/news` },
      { name: t('contact'), href: `/${locale}/contact` },
    ],
    [t, locale]
  );

  // Memoized active state checker
  const isActive = useCallback(
    (href: string) => {
      if (href === `/${locale}`) {
        return pathname === `/${locale}` || pathname === `/${locale}/`;
      }
      return pathname.startsWith(href);
    },
    [pathname, locale]
  );

  // Enhanced close function with proper state management
  const closeMenu = useCallback(() => {
    if (!isOpen || isClosing) return;

    // Clear any existing timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }

    setIsClosing(true);
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      closeTimeoutRef.current = null;
    }, 250); // Match animation duration
  }, [isOpen, isClosing]);

  // Fixed toggle function with robust state management
  const toggleMenu = useCallback(
    (event?: React.MouseEvent) => {
      // Prevent event bubbling that could cause race conditions
      event?.stopPropagation();

      // Prevent rapid toggles
      if (isToggling) return;

      setIsToggling(true);

      // Use a more stable approach
      if (isOpen || isClosing) {
        closeMenu();
      } else {
        setIsOpen(true);
      }

      // Reset toggle lock after a short delay
      setTimeout(() => setIsToggling(false), 150);
    },
    [isOpen, isClosing, closeMenu, isToggling]
  );

  // Close mobile menu when route changes - FIXED LOGIC
  useEffect(() => {
    // Only close menu if it's open AND the pathname actually changed
    if (isOpen && lastPathname && lastPathname !== pathname) {
      closeMenu();
    }
    // Update last pathname
    setLastPathname(pathname);
  }, [pathname, isOpen, closeMenu, lastPathname]);

  // Enhanced keyboard navigation with proper cleanup
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        closeMenu();
        buttonRef.current?.focus();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, closeMenu]);

  // Trap focus within mobile menu with enhanced cleanup
  useEffect(() => {
    if (!isOpen || !menuRef.current) return;

    const menu = menuRef.current;
    const focusableElements = menu.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement?.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement?.focus();
          e.preventDefault();
        }
      }
    };

    menu.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => {
      menu.removeEventListener('keydown', handleTabKey);
    };
  }, [isOpen]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <nav
      className="fixed top-0 z-50 w-full bg-white/95 shadow-lg backdrop-blur-sm"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="group flex items-center"
            onClick={closeMenu}
            aria-label="Beneficial Solutions LLC - Return to homepage"
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
          <div
            className="hidden items-center space-x-8 md:flex"
            role="menubar"
            aria-label="Primary navigation"
          >
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
                role="menuitem"
                tabIndex={0}
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
              onClick={closeMenu}
              role="button"
              tabIndex={0}
            >
              {locale === 'en' ? 'FR' : 'EN'}
            </Link>

            {/* Enhanced Mobile menu button */}
            <button
              ref={buttonRef}
              className="touch-friendly rounded-md p-3 text-gray-700 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 md:hidden"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close mobile menu' : 'Open mobile menu'}
              aria-haspopup="true"
              disabled={isToggling}
            >
              <svg
                className="h-6 w-6 transition-transform duration-200"
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

        {/* Enhanced Mobile Navigation with Proper Animations */}
        {(isOpen || isClosing) && (
          <>
            {/* Enhanced backdrop with blur */}
            <div
              className={`backdrop-blur-mobile mobile-backdrop-visible fixed inset-0 z-40 bg-black/40 transition-opacity duration-200 md:hidden ${
                isClosing ? 'animate-fade-out' : 'animate-fade-in-overlay'
              }`}
              aria-hidden="true"
              onClick={(e) => {
                e.stopPropagation();
                closeMenu();
              }}
            />
            <div
              ref={menuRef}
              className={`mobile-menu-visible fixed left-0 right-0 top-16 z-50 border-t bg-white/95 shadow-xl backdrop-blur-sm md:hidden ${
                isClosing ? 'animate-slide-up' : 'animate-slide-down'
              }`}
              id="mobile-menu"
              aria-modal="true"
              role="dialog"
              aria-label="Mobile navigation menu"
              aria-labelledby="mobile-menu-title"
            >
              <div
                className="flex flex-col space-y-1 px-4 py-6"
                role="menu"
                aria-label="Mobile navigation"
              >
                <h2 id="mobile-menu-title" className="sr-only">
                  Mobile Navigation Menu
                </h2>
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`mobile-menu-item block flex min-h-[44px] items-center rounded-lg px-4 py-4 text-lg font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? 'border-l-4 border-red-600 bg-red-50 text-red-600'
                        : 'text-gray-700 hover:bg-red-50 hover:text-red-600 focus:bg-red-50 focus:text-red-600'
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    onClick={(e) => {
                      e.stopPropagation();
                      closeMenu();
                    }}
                    role="menuitem"
                    tabIndex={0}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="border-t border-gray-200 pt-4">
                  <Link
                    href={pathname.replace(
                      `/${locale}`,
                      `/${locale === 'en' ? 'fr' : 'en'}`
                    )}
                    className="mobile-menu-item block flex min-h-[44px] w-full items-center rounded-lg px-4 py-4 text-left text-lg font-medium text-gray-700 transition-all duration-200 hover:bg-red-50 hover:text-red-600 focus:bg-red-50 focus:text-red-600"
                    aria-label={`Switch to ${locale === 'en' ? 'French' : 'English'} language`}
                    onClick={(e) => {
                      e.stopPropagation();
                      closeMenu();
                    }}
                    role="menuitem"
                    tabIndex={0}
                  >
                    <span className="flex items-center">
                      <svg
                        className="mr-2 h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                        />
                      </svg>
                      {locale === 'en'
                        ? 'Switch to French'
                        : "Passer à l'anglais"}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default function Navbar() {
  return (
    <ErrorBoundary
      fallback={
        <nav className="fixed top-0 z-50 w-full bg-white/95 shadow-lg backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <span className="text-xl font-bold text-gray-900">
                  Beneficial Solutions
                </span>
              </div>
              <div className="text-sm text-gray-500">
                Navigation temporarily unavailable
              </div>
            </div>
          </div>
        </nav>
      }
    >
      <NavbarContent />
    </ErrorBoundary>
  );
}

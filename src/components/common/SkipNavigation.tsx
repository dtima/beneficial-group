'use client';

import { useState, useEffect } from 'react';

export default function SkipNavigation() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        setIsVisible(true);
      }
    };

    const handleClick = () => {
      setIsVisible(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClick);
    };
  }, [isClient]);

  if (!isClient || !isVisible) {
    return null;
  }

  return (
    <div className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50">
      <a
        href="#main-content"
        className="inline-block rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        onClick={() => setIsVisible(false)}
      >
        Skip to main content
      </a>
    </div>
  );
}

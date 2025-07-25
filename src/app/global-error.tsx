'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { IconComponents } from '@/components/common/IconSystem';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global error:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
          <div className="w-full max-w-md text-center">
            <div className="mb-8">
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
                <IconComponents.AlertTriangle
                  size="xl"
                  className="text-red-600"
                />
              </div>
              <h1 className="mb-4 text-2xl font-bold text-gray-900">
                Something went wrong!
              </h1>
              <p className="mb-8 text-gray-600">
                We&apos;re sorry, but something unexpected happened. Please try
                again.
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={reset}
                className="inline-flex w-full items-center justify-center rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-red-700"
              >
                <IconComponents.RefreshCw size="sm" className="mr-2" />
                Try Again
              </button>

              <Link
                href="/en"
                className="inline-flex w-full items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition-colors duration-200 hover:bg-gray-50"
              >
                <IconComponents.Home size="sm" className="mr-2" />
                Go to Homepage
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

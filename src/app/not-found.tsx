import Link from 'next/link';
import { IconComponents } from '@/components/common/IconSystem';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md text-center">
        <div className="mb-8">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
            <IconComponents.AlertCircle size="xl" className="text-red-600" />
          </div>
          <h1 className="mb-4 text-6xl font-bold text-gray-900">404</h1>
          <h2 className="mb-4 text-2xl font-semibold text-gray-700">
            Page Not Found
          </h2>
          <p className="mb-8 text-gray-600">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/en"
            className="inline-flex w-full items-center justify-center rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-red-700"
          >
            <IconComponents.Home size="sm" className="mr-2" />
            Go to Homepage
          </Link>

          <Link
            href="/en/contact"
            className="inline-flex w-full items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition-colors duration-200 hover:bg-gray-50"
          >
            <IconComponents.Contact size="sm" className="mr-2" />
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}

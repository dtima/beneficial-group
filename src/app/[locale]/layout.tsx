import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import StructuredData, {
  organizationSchema,
  websiteSchema,
} from '@/components/common/StructuredData';
import { PerformanceMonitorProvider } from '@/components/common/PerformanceMonitor';
import SkipNavigation from '@/components/common/SkipNavigation';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: false,
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  preload: false,
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: {
      default:
        'Beneficial Solutions LLC - Innovative Solutions for a Sustainable Future',
      template: '%s | Beneficial Solutions LLC',
    },
    description:
      'Leading sustainable solutions provider in Cameroon. Mining, transport, forestry, and agriculture services driving economic growth and environmental protection.',
    keywords: [
      'sustainable mining',
      'eco-friendly transportation',
      'bamboo products',
      'cassava cultivation',
      'environmental solutions',
      'Cameroon',
      'Africa',
    ],
    authors: [{ name: 'Beneficial Solutions LLC' }],
    creator: 'Beneficial Solutions LLC',
    publisher: 'Beneficial Solutions LLC',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://beneficialsolutions.com'),
    alternates: {
      canonical: '/',
      languages: {
        en: '/en',
        fr: '/fr',
      },
    },
    openGraph: {
      title:
        'Beneficial Solutions LLC - Innovative Solutions for a Sustainable Future',
      description:
        'Leading sustainable solutions provider in Cameroon. Mining, transport, forestry, and agriculture services driving economic growth and environmental protection.',
      url: 'https://beneficialsolutions.com',
      siteName: 'Beneficial Solutions LLC',
      images: [
        {
          url: '/logo.png',
          width: 1200,
          height: 630,
          alt: 'Beneficial Solutions LLC Logo',
        },
      ],
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title:
        'Beneficial Solutions LLC - Innovative Solutions for a Sustainable Future',
      description:
        'Leading sustainable solutions provider in Cameroon. Mining, transport, forestry, and agriculture services driving economic growth and environmental protection.',
      images: ['/logo.png'],
      creator: '@beneficialsolutions',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <StructuredData type="organization" data={organizationSchema} />
        <StructuredData type="website" data={websiteSchema} />
      </head>
      <body className={`${inter.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ErrorBoundary>
            <PerformanceMonitorProvider>
              <div className="flex min-h-screen flex-col">
                <SkipNavigation />
                <Navbar />
                <main id="main-content" className="flex-1 pt-16">
                  {children}
                </main>
                <Footer />
                <WhatsAppButton />
              </div>
            </PerformanceMonitorProvider>
          </ErrorBoundary>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Beneficial Solutions LLC',
  description: 'Redirecting to Beneficial Solutions LLC',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

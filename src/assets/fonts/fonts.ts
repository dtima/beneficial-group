// This file is temporarily empty to prevent network-related build failures.
// TODO: Re-implement with self-hosted fonts.

import localFont from 'next/font/local';

/*
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

export const notoSans = Noto_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans',
});
*/

export const fontSans = localFont({
  src: './inter-v19-latin-regular.woff2',
  display: 'swap',
  variable: '--font-sans',
});

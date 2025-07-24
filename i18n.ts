import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Ensure locale is valid
  if (!locale || !['en', 'fr'].includes(locale)) {
    locale = 'en'; // Default to English
  }
  
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
}); 
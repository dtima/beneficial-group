import { createRequestHandler } from '@netlify/plugin-nextjs';

const handler = createRequestHandler({
  buildId: process.env.NETLIFY_NEXT_PLUGIN_BUILD_ID,
  // You can add custom configuration here if needed
});

export { handler };

// import build from '@hono/vite-build/cloudflare-pages'
// import devServer from '@hono/vite-dev-server'
// import adapter from '@hono/vite-dev-server/cloudflare'
// import { defineConfig } from 'vite'

// export default defineConfig({
//   plugins: [
//     build(),
//     devServer({
//       adapter,
//       entry: 'src/index.tsx'
//     })
//   ]
// })
////////////////////////////

import build from '@hono/vite-build/cloudflare-pages';
import devServer from '@hono/vite-dev-server';
import adapter from '@hono/vite-dev-server/cloudflare';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    build(), // Enables Hono's build features
    devServer({
      adapter, // Adapter for Cloudflare
      entry: 'src/index.tsx', // Entry point for the server-side
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        server: './src/index.tsx', // Entry point for server-side
        client: './src/client.tsx', // Entry point for client-side
      },
      output: {
        entryFileNames: (chunkInfo) => {
          // Customize output filenames
          return chunkInfo.name === 'client'
            ? 'static/client.js'
            : '[name].js'; // Default for other outputs
        },
      },
    },
  },
});

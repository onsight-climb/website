import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    // Permit only the explicitly configured ngrok review host during local preview.
    allowedHosts: process.env.NGROK_PREVIEW_HOST
      ? [process.env.NGROK_PREVIEW_HOST]
      : [],
  },
});

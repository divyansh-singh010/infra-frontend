import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    watch: {
      usePolling: true, // or set to false based on your environment
    },
  },
  css: {
    postcss: './postcss.config.js',
  },
  preview: {
    port: 4173,
    host: true
  }
});

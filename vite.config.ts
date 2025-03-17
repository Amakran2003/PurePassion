import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages deployment configuration
export default defineConfig({
  plugins: [react()],
  base: '/SafranOriental/', // Confirmed this matches the actual repository name
  build: {
    sourcemap: true, // Help with debugging issues
    outDir: 'dist',
  },
  server: {
    open: true,
    host: true, // Listen on all addresses, including LAN and localhost
    port: 5173, // Default port
  },
});

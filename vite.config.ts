import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages deployment configuration
export default defineConfig({
  plugins: [react()],
  base: '/purepassion/', // Correct setting for GitHub Pages
  build: {
    sourcemap: true, // Help with debugging issues
    outDir: 'dist',
  },
  server: {
    open: true,
  },
});

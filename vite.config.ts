import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuration simplifiée qui fonctionne avec votre projet
export default defineConfig({
  plugins: [react()],
  base: '', // Conservé pour le bon fonctionnement des chemins
  server: {
    open: true,
  },
});

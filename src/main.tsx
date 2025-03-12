import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { LanguageProvider } from './context/LanguageContext';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Élément root introuvable dans le DOM");
}

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);

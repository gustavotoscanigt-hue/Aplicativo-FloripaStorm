import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// @ts-ignore
import { registerSW } from 'virtual:pwa-register';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

// Auto-update service worker
// Configurado para atualizar silenciosamente para uma experiência nativa melhor
const updateSW = registerSW({
  onNeedRefresh() {
    // Atualiza imediatamente quando uma nova versão é detectada
    updateSW(true);
  },
  onOfflineReady() {
    console.log("Aplicativo pronto para uso offline.");
  },
});

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
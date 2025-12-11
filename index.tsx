import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// @ts-ignore
import { registerSW } from 'virtual:pwa-register';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

// Auto-update service worker
const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("Nova versão disponível. Recarregar?")) {
      updateSW(true);
    }
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
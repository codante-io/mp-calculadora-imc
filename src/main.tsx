import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { GlobalStyles } from './global-styles.ts';
import { GlobalProvider } from './providers/GlobalContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalProvider>
      <GlobalStyles />
      <App />
    </GlobalProvider>
  </React.StrictMode>
);

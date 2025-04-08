import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import './main.css';
import { App } from './pages/app.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Theme accentColor="blue" radius="none">
        <App />
      </Theme>
    </BrowserRouter>
  </StrictMode>,
);

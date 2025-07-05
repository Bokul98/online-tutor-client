import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Router from './router/Router.jsx';
import { RouterProvider } from 'react-router';
import AuthProvider from './context/AuthContext/AuthProvider';
import { ThemeProvider } from './context/ThemeContext/ThemeContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={Router} />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);

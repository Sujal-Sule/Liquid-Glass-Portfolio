import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import App from './App.tsx';
import ProjectPage from './pages/ProjectPage.tsx';
import CustomCursor from './components/CustomCursor.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        {/* Global custom cursor rendered on ALL pages */}
        <CustomCursor />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
    <Analytics />
  </StrictMode>,
);

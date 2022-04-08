import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { OffsetProvider } from './context/offset';
import { ThemeProvider } from './context/theme';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <ThemeProvider>
          <OffsetProvider>
            <App />
          </OffsetProvider>
        </ThemeProvider>
      </Router>
    </QueryClientProvider>
  </React.StrictMode>
);

import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import './index.css'
import React from 'react';

const rootElement = document.getElementById('root');

if (rootElement) {

    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    );
} else {
  console.error('No root element found');
}
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import JotaiTest from './views/JotaiTest';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/jotai-test',
    element: <JotaiTest />,
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  RouterProvider,
} from "react-router";
import router from './routes/routes.jsx';
import AuthProvider from './components/Provider/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto m-28'>
    <StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </StrictMode>
  </div>
);

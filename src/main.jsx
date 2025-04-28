import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import AOSWrapper from './AOSWrapper';
 // Adjust path as needed

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AOSWrapper>
      <RouterProvider router={router} />
    </AOSWrapper>
  </StrictMode>
);
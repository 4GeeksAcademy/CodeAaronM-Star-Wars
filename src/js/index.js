// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './views/home.js';  // Asegúrate de importar el componente raíz correcto
import Layout from './layout.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './layout';  // Asegúrate de importar el componente raíz correcto

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

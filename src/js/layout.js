// src/js/layout.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Contacts } from './components/Contacts';
import injectContext from './store/flux';  // Importa la función injectContext

const Layout = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  </Router>
);

export default injectContext(Layout);

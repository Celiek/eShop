import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/login/login.jsx';
import Register from './pages/register/register.jsx';
import RegisterComplete from './pages/registerComplete/registerComplete.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registerComplete" component={<RegisterComplete/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

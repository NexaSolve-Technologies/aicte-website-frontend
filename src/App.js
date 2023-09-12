
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import LoginPage from './components/pages/AuthPage/LoginPage/LoginPage';
import './App.css';


function App() {
  return (
   <Router>
    <Routes>
      <Route path='/*' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  </Router> 
  );
};

export default App;

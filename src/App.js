import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import LoginPage from './components/pages/AuthPage/LoginPage/LoginPage';
import './App.css';
import SignupPage from './components/pages/AuthPage/SignupPage/SignupPage';


function App() {
  return (
   <Router>
    <Routes>
      <Route path='/*' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element = {<SignupPage />} />
    </Routes>
  </Router> 
  );
};

export default App;

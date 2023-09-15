import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import LoginPage from './components/pages/AuthPage/LoginPage/LoginPage';
import './App.css';
import SignupPage from './components/pages/AuthPage/SignupPage/SignupPage';
import UserDashboard from './components/pages/UserDashboard/UserDashboard';
import CurriculumDesigner from './components/pages/CurriculumDesigner/CurriculumDesigner';
import ConductMeet from './components/pages/UserDashboard/Sidebar/ConductMeet/ConductMeet';


function App() {
  return (
   <Router>
    <Routes>
      <Route path='/*' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element = {<SignupPage />} />
      <Route path='/userDashboard' element = {<UserDashboard />} />
      <Route path='/curriculumDesigner' element= {<CurriculumDesigner />} />
      <Route path='/meetingPage' element = { < ConductMeet />} />

    </Routes>
  </Router> 
  );
};

export default App;

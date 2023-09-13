import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import Navbar from "./NavBar/Navbar";
import LoginForm from "./LoginForm/LoginForm";
import './LoginPage.css'

const LoginPage = () => {
   
    return (
       <div>
          <div className="Navbar">
            <Navbar />
         </div>
          <div className="login-container">
            <LoginForm />
         </div>
       </div> 
    );
}

export default LoginPage;
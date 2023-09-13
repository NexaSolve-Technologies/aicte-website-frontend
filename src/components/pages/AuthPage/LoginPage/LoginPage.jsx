import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import Navbar from "./NavBar/Navbar";
import LoginForm from "./LoginForm/LoginForm";
import './LoginPage.css'
import BackgroundImage from "./BackgroundImage/BackgroundImage";

const LoginPage = () => {
   
    return (
       <div className="FullPage">
          <div className="Navbar">
            <Navbar />
         </div>
          <div className="BackGround">
            <div className="loginForm-Container">
               <LoginForm />
            </div>
         </div> 
       </div> 
    );
}

export default LoginPage;
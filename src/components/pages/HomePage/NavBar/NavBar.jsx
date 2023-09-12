import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    const navigate = useNavigate();
    
    const handleLoginClick = () => {
        navigate('/login');
    }
    
        return (
        <div className="root">
           <AppBar position="static" >
           <Toolbar>
                <Typography variant="h6" className="title">
                    Logo 
                </Typography> 
                <Button color="inherit" onClick={handleLoginClick}>Login</Button>
                <Button color="inherit">SignUp</Button>
            </Toolbar> 
            </AppBar> 
        </div>
        );
};
export default NavBar;
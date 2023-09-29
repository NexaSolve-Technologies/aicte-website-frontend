import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import './Navbar.css'

const Navbar = () => {
    
    return (
        <div className="root">
           <AppBar position="static" className="AppBar" style={{backgroundColor : 'white'}} >
           <Toolbar>
                <Typography variant="h6" className="title">
                    <div className="logo">Logo</div> 
                </Typography> 
            </Toolbar> 
            </AppBar> 
        </div>
        );
}

export default Navbar;
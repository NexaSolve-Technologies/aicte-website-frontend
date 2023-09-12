import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import './NavBar.css';

const NavBar = () => {
        return (
        <div className="root">
           <AppBar position="static" >
           <Toolbar>
                <Typography variant="h6" className="title">
                    Logo 
                </Typography> 
                <Button color="inherit">Login</Button>
                <Button color="inherit">SignUp</Button>
            </Toolbar> 
            </AppBar> 
        </div>
        );
};
export default NavBar;
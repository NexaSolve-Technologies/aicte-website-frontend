import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import './UpperNavbar.css'

const UpperNavbar = ({fileName}) => {
    fileName = "DSA Curriculum"
    return(
        <div className="upperNavbar-container">
            <AppBar>
            <Toolbar>
            <div className="upperNavbar-left">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                 {fileName}    
                </Typography> 
            </div> 
            <div className="logo1" />
            </Toolbar>
            </AppBar>
        </div>
    )
}

export default UpperNavbar;
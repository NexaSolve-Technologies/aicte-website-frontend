import React, { useState } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import './UpperNavbar.css'

const UpperNavbar = ({fileName}) => {
    fileName = "DSA Curriculum"
    const [currentFileName, setCurrentFileName] = useState(fileName);
       
    return(
        <div className="upperNavbar-container">
            <AppBar style={{backgroundColor : '#F5F5F4'}}>
                <Toolbar>
                    <div className="upperNavbar-left">
                    <input 
                        value={currentFileName}
                        onChange={(e) => setCurrentFileName(e.target.value)}
                    />
                    </div> 
                <div className="logo1" />
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default UpperNavbar;
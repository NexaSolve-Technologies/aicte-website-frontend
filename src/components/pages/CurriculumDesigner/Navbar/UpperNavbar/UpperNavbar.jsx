import React, { useState } from "react";
import { AppBar, Toolbar, Typography, ListItem, ListItemIcon } from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import DuoIcon from '@mui/icons-material/Duo';
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
                <div className="upperNavbar-right" >
                    <ListItem button >
                        <ListItemIcon>
                            <CommentIcon />
                        </ListItemIcon>
                    </ListItem>
                    <ListItem button >
                        <ListItemIcon>
                            <ShareIcon /> 
                        </ListItemIcon>
                    </ListItem>
                    <ListItem button >
                        <ListItemIcon>
                            <DuoIcon />
                        </ListItemIcon>
                    </ListItem>
                </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default UpperNavbar;
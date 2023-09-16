import React, { useState } from "react";
import { AppBar, Toolbar, Typography, ListItem, ListItemIcon } from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import DuoIcon from '@mui/icons-material/Duo';
import './UpperNavbar.css'
import axios from "axios";

const UpperNavbar = () => {
    
    const [currentFileName, setCurrentFileName] = useState('');
      const addCurriculum = async () => {
        try {
            const response = await axios.post('http://localhost:3001/curriculumDesigner', {
                SubName : currentFileName
            });
            
            if(response.status === 201) {
                alert('Curriculum Name Added Successfully');
            }

        } catch (error) {
            if(error.response && error.response.status === 404) {
                alert("Curriculum Name already exists can't add it to the Database.")
            } else {
                console.error('There was an error while sending the request', error)
            }
        }
      } 
    return(
        <div className="upperNavbar-container">
            <AppBar style={{backgroundColor : '#F5F5F4'}}>
                <Toolbar>
                    <div className="upperNavbar-left">
                    <input 
                        type="text"
                        placeholder="Enter Curriculum Name"
                        value={currentFileName}
                        onChange={(e) => setCurrentFileName(e.target.value)}
                    />
                    <button onClick={addCurriculum}>Add Curriculum</button>
                    </div> 
                {/* <div className="logo1" /> */}
                <div className="logo1">
                    <div className="logoimage"></div>
                </div>
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
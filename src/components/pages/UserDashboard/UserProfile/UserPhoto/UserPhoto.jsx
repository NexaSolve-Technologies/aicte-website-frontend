import React from "react";
import { Avatar, Typography } from "@mui/material";
import './UserPhoto.css'


const UserPhoto = ({photoURL, role}) => { 
     
    role = "Note maker";
    return (
        <div className="user-photo-container">
            <Avatar alt="User Photo" src={photoURL} sx={{width : 150, height : 150, marginTop : 3}} className="user-avatar" />
            <Typography variant="h5" sx={{marginTop : 0.5, fontWeight :"bold"}} className="user-role">
                {role}
            </Typography>
        </div>
    );
}

export default UserPhoto;
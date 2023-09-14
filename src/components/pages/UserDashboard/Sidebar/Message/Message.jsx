import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import MessageIcon from '@mui/icons-material/Message';

const Profile = () => {
    return (
        <div className="profile">
           <ListItem button>
                <ListItemIcon>
                   <MessageIcon /> 
                </ListItemIcon>
                <ListItemText primary="Message" />
            </ListItem>

        </div>
    )
};

export default Profile
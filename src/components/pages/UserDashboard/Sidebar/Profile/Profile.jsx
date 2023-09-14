import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';

const Profile = () => {
    return (
        <div className="profile">
           <ListItem button>
                <ListItemIcon>
                    <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Profile" />
            </ListItem>

        </div>
    )
};

export default Profile
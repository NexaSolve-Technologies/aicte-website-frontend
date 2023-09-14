import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';

const Logout = () => {
    return (
        <div className="profile">
           <ListItem button>
                <ListItemIcon>
                    <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
            </ListItem>
        </div>
    )
};

export default Logout
import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const Navigate = useNavigate();
    const handleClick = () => {
        Navigate('/*')
    }
    return (
        <div className="profile">
           <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
            </ListItem>
        </div>
    )
};

export default Logout
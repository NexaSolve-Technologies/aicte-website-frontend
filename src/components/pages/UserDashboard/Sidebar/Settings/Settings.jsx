import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';

const Settings = () => {
    return (
        <div>
            <ListItem button>
                <ListItemIcon>
                    <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
            </ListItem>            
        </div>
    )
};

export default Settings;
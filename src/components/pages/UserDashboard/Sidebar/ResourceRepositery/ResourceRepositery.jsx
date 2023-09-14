import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import FolderCopyIcon from '@mui/icons-material/FolderCopy';

const ResourceRepositery = () => {
    return (
        <div>
            <ListItem button >
                <ListItemIcon>
                    <FolderCopyIcon />
                </ListItemIcon>
                <ListItemText primary="Repositery"/>      
            </ListItem>

        </div>
    )
}

export default ResourceRepositery;
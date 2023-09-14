import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';

const RecentTemplates = () => {
    return (
        <div>
      <ListItem button>
        <ListItemIcon>
          <ViewQuiltIcon />
        </ListItemIcon>
        <ListItemText primary="Recent Templates"/>
      </ListItem>
        </div>
    );
};

export default RecentTemplates;
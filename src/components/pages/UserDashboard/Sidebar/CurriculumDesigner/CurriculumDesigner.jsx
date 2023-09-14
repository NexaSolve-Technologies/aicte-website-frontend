import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import PresentToAllIcon from '@mui/icons-material/PresentToAll';

const CurriculumDesigner = () => {
    return (
        <div>
           <ListItem button >
                <ListItemIcon>
                    <PresentToAllIcon />
                </ListItemIcon>
                <ListItemText primary="Curriculum Designer"/>
            </ListItem>

        </div>
    )
}

export default CurriculumDesigner;
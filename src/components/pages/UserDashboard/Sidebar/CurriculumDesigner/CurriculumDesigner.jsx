import React from "react";
import { useNavigate } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import PresentToAllIcon from '@mui/icons-material/PresentToAll';



const CurriculumDesigner = () => {
    const Navigate = useNavigate();

    const handleClick = () => {
        Navigate('/curriculumDesigner') 
    }
    return (
        <div>
           <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <PresentToAllIcon />
                </ListItemIcon>
                {/* <ListItemText primary="Curriculum Designer"/> */}
                {/** */}
                <ListItemText primary="Note Maker"/>
            </ListItem>

        </div>
    )
}

export default CurriculumDesigner;
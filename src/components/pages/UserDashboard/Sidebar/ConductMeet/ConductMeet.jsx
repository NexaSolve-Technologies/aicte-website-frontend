import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import VideoCallIcon from '@mui/icons-material/VideoCall';
import MeetingPage from "../../../MeetingPage/MeetingPage";

const ConductMeet = () => {
    return (
        <div>
        <ListItem button>
            <ListItemIcon>
                <VideoCallIcon />
            </ListItemIcon>
            <ListItemText primary="Conduct Meet" />
        </ListItem>

        </div>
    );
}

export default ConductMeet;
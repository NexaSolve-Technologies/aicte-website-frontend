import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { useNavigate } from "react-router-dom";
import MeetingPage from "../../../MeetingPage/MeetingPage";

const ConductMeet = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/meetingPage");
    }
    return (
        <div>
        <ListItem button onClick={handleClick}>
            <ListItemIcon>
                <VideoCallIcon />
            </ListItemIcon>
            <ListItemText primary="Conduct Meet" />
        </ListItem>

        </div>
    );
}

export default ConductMeet;
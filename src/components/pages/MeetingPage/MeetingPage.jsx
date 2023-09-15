import React, { useState } from "react";
import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { VideoCall, Mic, MicOff, Videocam, VideocamOff } from "@mui/icons-material";
import "./MeetingPage.css";

const MeetingPage = () => {
    const [micEnabled, setMicEnabled] = useState(true);
    const [videoEnabled, setVideoEnabled] = useState(true);

    const toggleMic =()=>{
        setMicEnabled((prev) => !prev);
    };

    const toggleVideo=()=>{
        setVideoEnabled((prev) => !prev);
    };

    return(
        <div className="meet-page">
            <Container maxWidth="md">
                <Paper elevation={3} style={{padding:"20px"}}>
                    <Grid container spacing={3}>
                        <Grid item xs={9}>
                            <Typography variant="h5">Video Meeting</Typography>
                            {/* video conte */}
                            <div className="Video-container">
                                <video autoPlay muted></video>
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div>
    )
}
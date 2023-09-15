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
                                {/* yaha dikhega video streams */}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            {/* yaha list aayegi pratibhaagiyon ki */}
                        </Grid>
                    </Grid>
                </Paper>
                {/* niyantrit ghundi */}
                <div className="controls">
                    <Button
                    variant="contained"
                    color={micEnabled ? "primary" : "secondary"}
                    onClick={toggleMic}
                    startIcon={micEnabled ? <Mic/> : <MicOff/>}
                    >
                        {micEnabled ? "Mute" : "Unmute"}
                    </Button>
                    <Button
                    variant="contained"
                    color={videoEnabled ? "primary" : "secondary"}
                    onClick={toggleVideo}
                    startIcon={videoEnabled ? <Videocam/> : <VideocamOff/>}
                    >
                        {videoEnabled ? "Stop Video" : "Start Video"}
                    </Button>
                    <Button
                    variant="contained"
                    color="primary"
                    startIcon={<VideoCall/>}
                    >
                        Join Meeting
                    </Button>
                </div>
            </Container>
        </div>
    );
}
export default MeetingPage;
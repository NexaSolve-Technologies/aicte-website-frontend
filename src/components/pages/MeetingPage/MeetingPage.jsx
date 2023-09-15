import React, { useEffect, useState } from "react";
import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { VideoCall, Mic, MicOff, Videocam, VideocamOff } from "@mui/icons-material";
import SimplePeer from "simple-peer";
import "./MeetingPage.css";

const MeetingPage = () => {
    const [micEnabled, setMicEnabled] = useState(true);
    const [videoEnabled, setVideoEnabled] = useState(true);
    const [localStream, setLocalStream] = useState(null);
    const [peer, setPeer] = useState(null);


    useEffect(() =>{
        const initWebRTC = async () =>{
            const stream = await navigator.mediaDevices.getUserMedia({
                video:true,
                audio:true,
            });
            setLocalStream(stream);

            const newPeer = new SimplePeer({
                initiator:true,
                trickle:false,
                stream,
            });
            setPeer(newPeer);
            // when the peer is connected to other user
            newPeer.on("stream", (remoteStream)=>{
                const video = document.createElement("video");
                video.srcObject = remoteStream;
                document.querySelector(".video-container").appendChild(video);
            });
            newPeer.on("signal", (data) =>{
                // remote peer ko data bhej
                // aaise kare socket.emit("signal", data);
            });
        };
        initWebRTC();

        return()=>{
            if(peer){
                peer.destroy();
            }
            if(localStream){
                localStream.getTracks().forEach((track) => track.stop());
            }
        };
    }, []);


    const toggleMic =()=>{
        // setMicEnabled((prev) => !prev);
        if(localStream){
            localStream.getAudioTracks().forEach((track)=>{
                track.enabled = !track.enabled;
            });
            setMicEnabled(!micEnabled);
        }
    };

    const toggleVideo=()=>{
        // setVideoEnabled((prev) => !prev);
        if(localStream){
            localStream.getVideoTracks().forEach((track)=>{
                track.enabled = !track.enabled;
            });
            setVideoEnabled(!videoEnabled);
        }
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
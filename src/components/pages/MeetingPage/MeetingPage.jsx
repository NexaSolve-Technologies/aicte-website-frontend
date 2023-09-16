import React, { useEffect, useState } from "react";
import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import {
  VideoCall,
  Mic,
  MicOff,
  Videocam,
  VideocamOff,
  Chat,
  ThumbUp,
  Settings,
  PanTool,
  ScreenShare,
  Minimize,
  CallEnd,
} from "@mui/icons-material";
import SimplePeer from "simple-peer";
import "./MeetingPage.css";

const MeetingPage = () => {
  const [micEnabled, setMicEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [localStream, setLocalStream] = useState(null);
  const [peer, setPeer] = useState(null);
  const [isMinimized, setMinimized] = useState(false);
  const [isCallActive, setIsCallActive] = useState(false);

  useEffect(() => {
    const initWebRTC = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        setLocalStream(stream);

        // Initialize signaling and set up a connection with peers here
        // You need to handle offer, answer, and ICE candidate exchange

        const newPeer = new SimplePeer({
          initiator: true, // or false if you are the receiver
          trickle: false,
          stream,
        });
        setPeer(newPeer);

        newPeer.on("stream", (remoteStream) => {
          const video = document.createElement("video");
          video.srcObject = remoteStream;
          document.querySelector(".video-container").appendChild(video);
        });

        newPeer.on("signal", (data) => {
          // Send signaling data to the other participant
          // socket.emit("signal", data);
        });

        // Handle other events and signaling messages here
      } catch (error) {
        console.error("Error accessing media devices or setting up the call:", error);
      }
    };
    initWebRTC();

    return () => {
      if (peer) {
        peer.destroy();
      }
      if (localStream) {
        localStream.getTracks().forEach((track) => {
          track.stop();
        });
      }
    };
  }, []);

  const toggleMic = () => {
    if (localStream) {
      localStream.getAudioTracks().forEach((track) => {
        track.enabled = !track.enabled;
      });
      setMicEnabled(!micEnabled);
    }
  };

  const toggleVideo = () => {
    if (localStream) {
      localStream.getVideoTracks().forEach((track) => {
        track.enabled = !track.enabled;
      });
      setVideoEnabled(!videoEnabled);
    }
  };

  const startCall = async () => {
    // Implement logic to set up signaling and WebRTC connection
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      setLocalStream(stream);

      // Set up signaling connection and exchange offer/answer
      // ...

      const newPeer = new SimplePeer({
        initiator: true, // or false if you are the receiver
        trickle: false,
        stream,
      });
      setPeer(newPeer);

      newPeer.on("stream", (remoteStream) => {
        const video = document.createElement("video");
        video.srcObject = remoteStream;
        document.querySelector(".video-container").appendChild(video);
      });

      newPeer.on("signal", (data) => {
        // Send signaling data to the other participant
        // socket.emit("signal", data);
      });

      // Handle other events and signaling messages here
    } catch (error) {
      console.error("Error accessing media devices or setting up the call:", error);
    }
  };

  const endCall = () => {
    if (isCallActive) {
      // End the call
      if (peer) {
        peer.destroy();
      }
      if (localStream) {
        localStream.getTracks().forEach((track) => {
          track.stop();
        });
      }
      setIsCallActive(false); // Set the call as inactive
    } else {
      // Start the call
      startCall();
      setIsCallActive(true); // Set the call as active
    }
  };

  const minimize = () => {
    const videoCallContainer = document.querySelector(".video-container");
    videoCallContainer.classList.add("minimized");
    setMinimized(true);
  };

  const maximize = () => {
    const videoCallContainer = document.querySelector(".video-container");
    videoCallContainer.classList.remove("minimized");
    setMinimized(false);
  };

  const renderMinimizedButton = () => {
    if (isMinimized) {
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={maximize}
          startIcon={<Minimize />}
        >
          Maximize
        </Button>
      );
    } else {
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={minimize}
          startIcon={<Minimize />}
        >
          Minimize
        </Button>
      );
    }
  };

  return (
    <div className="meet-page">
      <Container maxWidth="xl">
        <Paper elevation={3} style={{ padding: "20px" }}>
          <Grid container spacing={3}>
            <Grid item xs={9}>
              <Typography variant="h5">Video Meeting</Typography>
              <div className="video-container">
                {/* Display video streams here */}
                {localStream && (
                  <video
                    ref={(videoRef) => {
                      if (videoRef && localStream) {
                        videoRef.srcObject = localStream;
                      }
                    }}
                    autoPlay
                    muted
                  />
                )}
              </div>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h6">Participants</Typography>
            </Grid>
          </Grid>
        </Paper>
        <div className="controls">
          <Button
            variant="contained"
            color={micEnabled ? "primary" : "secondary"}
            onClick={toggleMic}
            startIcon={micEnabled ? <Mic /> : <MicOff />}
          >
            {micEnabled ? "Mute" : "Unmute"}
          </Button>
          <Button
            variant="contained"
            color={videoEnabled ? "primary" : "secondary"}
            onClick={toggleVideo}
            startIcon={videoEnabled ? <Videocam /> : <VideocamOff />}
          >
            {videoEnabled ? "Stop Video" : "Start Video"}
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={isCallActive ? <CallEnd /> : <VideoCall />}
            onClick={endCall}
          >
            {isCallActive ? "End Call" : "Start Call"}
          </Button>
          <Button variant="contained" color="primary" startIcon={<Chat />}>
            Chat
          </Button>
          <Button variant="contained" color="primary" startIcon={<ThumbUp />}>
            React
          </Button>
          <Button variant="contained" color="primary" startIcon={<PanTool />}>
            Raise Hand
          </Button>
          <Button variant="contained" color="primary" startIcon={<Settings />}>
            More
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={videoEnabled ? <Videocam /> : <VideocamOff />}
            onClick={toggleVideo}
          >
            Camera On/Off
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ScreenShare />}
          >
            Share Screen
          </Button>
          {renderMinimizedButton()}
        </div>
      </Container>
    </div>
  );
};

export default MeetingPage;

import React from "react";
import { Container } from "@mui/material";
import UserAnalytics from "./UserAnalytics/UserAnalytics";
import Profile from "./Profile/Profile";
import RecentTemplates from "./RecentTemplates/RecentTemplates";
import ResourceRepositery from "./ResourceRepositery/ResourceRepositery";
import Message from "./Message/Message";
import ConductMeet from "./ConductMeet/ConductMeet";

const Sidebar = () => {
    return(
        <Container>
           <Profile /> 
           <RecentTemplates />
           <UserAnalytics />
           <ResourceRepositery />
           <Message />
           <ConductMeet />
        </Container>
    )
};

export default Sidebar;
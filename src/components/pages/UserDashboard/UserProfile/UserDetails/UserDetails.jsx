import React from "react";
import { Typography } from "@mui/material";
import './UserDetails.css'

const UserDetails = ({name, email, designation, institute}) => {
    name = "Robert Downey Jr."
    email = "abc@gmail.com";
    designation = "HOD";
    institute = "PIT";
    return (
        <div className="user-details-container">
            <Typography variant="body1">{name}</Typography>
            <Typography variant="body1">{email} </Typography> 
            <Typography variant="body1">{designation} </Typography> 
            <Typography variant="body1">{institute}</Typography> 
        </div>
    )
};

export default UserDetails;
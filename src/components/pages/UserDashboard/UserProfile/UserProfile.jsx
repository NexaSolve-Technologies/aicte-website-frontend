import React from "react";
import UserPhoto from "./UserPhoto/UserPhoto";
import UserDetails from "./UserDetails/UserDetails";
import './UserProfile.css'

const UserProfile = () => {
    return(
        <div className="user-profile">
        <UserPhoto />
        <UserDetails />
        </div>
    )
}

export default UserProfile;
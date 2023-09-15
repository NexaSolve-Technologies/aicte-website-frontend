import React from "react";
import DashNavbar from "./Navbar/Navbar";
import MainContent from "./MainContent/MainContent";
import Sidebar from "./Sidebar/Sidebar";
import UserProfile from "./UserProfile/UserProfile";

const UserDashboard = () => {
    return (
        <div>
            <DashNavbar />
            <Sidebar />
            <UserProfile />
            <MainContent />
        </div>
    )
}

export default UserDashboard;
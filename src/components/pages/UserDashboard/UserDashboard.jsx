import React from "react";
import DashNavbar from "./Navbar/Navbar";
import MainContent from "./MainContent/MainContent";

const UserDashboard = () => {
    return (
        <div>
            <DashNavbar />
            <MainContent />
            <h1> User DashBoard</h1>
        </div>
    )
}

export default UserDashboard;
import React from "react";
import DashNavbar from "./Navbar/Navbar";
import MainContent from "./MainContent/MainContent";
import Sidebar from "./Sidebar/Sidebar";

const UserDashboard = () => {
    return (
        <div>
            <DashNavbar />
            <MainContent />
            <Sidebar />
        </div>  
    )
}

export default UserDashboard;
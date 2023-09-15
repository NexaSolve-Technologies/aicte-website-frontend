import React from "react";
import DashNavbar from "./Navbar/Navbar";
import MainContent from "./MainContent/MainContent";
import Sidebar from "./Sidebar/Sidebar";
import UserProfile from "./UserProfile/UserProfile";
import '../UserDashboard/UserDashboard.css'

const UserDashboard = () => {
    return (
        <div>
            <DashNavbar />
            
        <div>
            <Sidebar  />
            
            <div >
                <UserProfile />  
                <MainContent />
                
            </div>
           
        </div>  
        </div>  
        )
}

export default UserDashboard;
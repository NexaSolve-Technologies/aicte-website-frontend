import React from "react";
import MiniCalender from "./MiniAcademicCalendar/MiniAcademicCalendar";
import RecentTemplates from "./RecentTemplates/RecentTemplates";

const MainContent = () => {
    return (
        <div>
           <MiniCalender />
           <RecentTemplates />
        </div>
    );
};

export default MainContent;
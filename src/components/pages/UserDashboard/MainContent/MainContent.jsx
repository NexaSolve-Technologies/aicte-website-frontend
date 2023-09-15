import React from "react";
import MiniCalender from "./MiniAcademicCalendar/MiniAcademicCalendar";
import RecentTemplates from "./RecentTemplates/RecentTemplates";
import Statistics from"./Statistics/Statistics";

const MainContent = () => {
    return (
        <div>
           <MiniCalender />
           <RecentTemplates />
           <Statistics />
        </div>
    );
};

export default MainContent;
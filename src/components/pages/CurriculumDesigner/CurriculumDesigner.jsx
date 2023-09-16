import React from "react";
import './CurriculumDesigner.css'
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar"
import CanvasArea from "./CanvasArea/CanvasArea";

const CurriculumDesigner = () => {
    return (
        <div>
            <Navbar />
            {/* <Sidebar /> */}
            {/* <CanvasArea /> */}
            <CanvasArea/>
        </div>
    )
};

export default CurriculumDesigner;
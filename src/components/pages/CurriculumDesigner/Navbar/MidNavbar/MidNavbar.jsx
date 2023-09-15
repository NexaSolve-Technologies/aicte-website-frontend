import React from "react";
import './MidNavbar.css';
import File from "./File/File";
import Insert from "./Insert/Insert";
import Format from "./Format/Format";
import Arrange from "./Arrange/Arrange";
import Edit from "./Edit/Edit";
import View from "./View/View";
import Charts from "./Charts/Charts";
import Tools from "./Tools/Tools";
import Help from "./Help/Help";


const MidNavbar = () => {
    return(
        <div className="mid-navbar">
            <File/>
            <Edit/>
            <View/>
            <Insert/>
            <Format/>
            <Charts/>
            <Arrange/>
            <Tools/>
            <Help/>
        </div>
    );
};

export default MidNavbar;
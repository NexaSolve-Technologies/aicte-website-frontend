import React from "react";
import NavBar from "./NavBar/NavBar";
import BackgroundImage from "./BackgroundImage/BackgroundImage";
import '../HomePage/HomePage.css';

const HomePage = () => {
    return (
        <div className="HomePage" style={{ font: "large"}}>
        <div className="NavBar">
            <NavBar />
        </div>
        <BackgroundImage />
        </div>
    );
};
export default HomePage;
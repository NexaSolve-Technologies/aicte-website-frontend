import React from "react";
import NavBar from "./NavBar/NavBar";
import BackgroundImage from "./BackgroundImage/BackgroundImage";

const HomePage = () => {
    return (
        <div className="HomePage" style={{ font: "large"}}>
        <NavBar />
        <BackgroundImage />
        </div>
    );
};
export default HomePage;
import React from "react";
import './Navbar.css'
import UpperNavbar from "./UpperNavbar/UpperNavbar";
import MidNavbar from "./MidNavbar/MidNavbar";
import Content from "./Content/Content"

const Navbar = () => {
    return(
        <div>
            {/* <UpperNavbar /> */}
            <MidNavbar />
            <Content />
        </div>
    )
}

export default Navbar;
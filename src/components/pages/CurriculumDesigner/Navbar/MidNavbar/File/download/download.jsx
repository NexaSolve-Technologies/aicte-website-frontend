import React, { useState } from "react";
import './download.css';

const Download=()=>{
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown=()=>{
        setShowDropdown(!showDropdown);
    };

    return (
        <div className="download-button">
            <button onClick={toggleDropdown}>Download</button>
            {/* {showDropdown &&} */}
        </div>
    );
}

export default Download;
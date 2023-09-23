import React, { useState } from "react";
import './versionhistory.css';

const VersionHistory=()=>{
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown=()=>{
        setShowDropdown(!showDropdown);
        console.log('version-history button clicked')
    };

    return (
        <div className="version-history-button">
            <button className="file-buttons" onClick={toggleDropdown}>Version history</button>
            {/* {showDropdown &&} */}
        </div>
    );
}

export default VersionHistory;
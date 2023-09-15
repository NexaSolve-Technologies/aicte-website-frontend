import React, { useState } from "react";
import './versionhistory.css';

const VersionHistory=()=>{
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown=()=>{
        setShowDropdown(!showDropdown);
    };

    return (
        <div className="version-history-button">
            <button onClick={toggleDropdown}>Version history</button>
            {/* {showDropdown &&} */}
        </div>
    );
}

export default VersionHistory;
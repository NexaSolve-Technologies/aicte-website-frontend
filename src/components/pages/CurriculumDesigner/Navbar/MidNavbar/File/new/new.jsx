import React, { useState } from "react";
import './new.css';

const New=()=>{
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown=()=>{
        setShowDropdown(!showDropdown);
    };

    return (
        <div className="new-button">
            <button className="file-buttons" onClick={toggleDropdown}>New</button>
            {showDropdown && <fromtemplategallery/>}
        </div>
    );
}

export default New;
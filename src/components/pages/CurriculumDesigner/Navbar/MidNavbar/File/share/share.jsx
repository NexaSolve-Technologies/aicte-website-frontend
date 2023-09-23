import React from "react";

const Share=()=>{
    const handleShareClick =()=>{
        alert('Share clicked');
    };

    return(
        <button className="file-buttons" onClick={handleShareClick}>Share</button>
    );
}

export default Share;
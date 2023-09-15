import React from "react";

const Share=()=>{
    const handleShareClick =()=>{
        alert('Share clicked');
    };

    return(
        <button onClick={handleShareClick}>Share</button>
    );
}

export default Share;
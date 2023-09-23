import React from "react";

const Share=()=>{
    const handleShareClick =()=>{
        console.log('Share clicked');
    };

    return(
        <button onClick={handleShareClick}>Share</button>
    );
}

export default Share;
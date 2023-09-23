import React from "react";

const Open =()=>{
    const handleOpenClick=()=>{
        console.log('open button clicked');
    };

    return(
        <button className="file-buttons" onClick={handleOpenClick}>Open</button>
    );
}

export default Open;
import React from "react";

const Open =()=>{
    const handleOpenClick=()=>{
        alert('open button clicked');
    };

    return(
        <button className="file-buttons" onClick={handleOpenClick}>Open</button>
    );
}

export default Open;
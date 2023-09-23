import React from "react";
import './movetotrash.css';

const MoveToTrash=()=>{
    const handleMoveTotrashClick=()=>{
        console.log("Move to trash clicked");
    };

    return(
        <button className="file-buttons" onClick={handleMoveTotrashClick}>Move To Trash</button>
    );
};

export default MoveToTrash;
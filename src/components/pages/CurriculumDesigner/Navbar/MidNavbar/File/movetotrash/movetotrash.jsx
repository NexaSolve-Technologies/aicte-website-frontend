import React from "react";
import './movetotrash.css';

const MoveToTrash=()=>{
    const handleMoveTotrashClick=()=>{
        console.log("Move to trash clicked");
    };

    return(
        <button onClick={handleMoveTotrashClick}>Move To Trash</button>
    );
};

export default MoveToTrash;
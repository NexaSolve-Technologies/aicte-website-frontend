import React,{useState} from "react";
import './movetotrash.css';

const MoveToTrash=()=>{
    const [isInTrash,setIsInTrash]=useState(false);
    const handleMoveTotrashClick=()=>{
        console.log("Move to trash clicked");
        setIsInTrash(!isInTrash);
    };

    return(
        <div>
            <button className="file-buttons" onClick={handleMoveTotrashClick}>
                {
                isInTrash ? "Restore from trash":"Move to Trash"
                }</button>
            {
                isInTrash&&<p>File is in the Trash!</p>
            }
        </div>
    );
};

export default MoveToTrash;
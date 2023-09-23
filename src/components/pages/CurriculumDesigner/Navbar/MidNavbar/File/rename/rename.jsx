import React from "react";

const Rename = () => {
    const handleRenameClick=()=>{
        console.log('Rename clicked')
    };
    return(
        <button className="file-buttons" onClick={handleRenameClick}>Rename</button>
    );
}

export default Rename;
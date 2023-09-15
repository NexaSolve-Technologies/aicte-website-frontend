import React from "react";

const Rename = () => {
    const handleRenameClick=()=>{
        alert('Rename clicked')
    };
    return(
        <button onClick={handleRenameClick}>Rename</button>
    );
}

export default Rename;
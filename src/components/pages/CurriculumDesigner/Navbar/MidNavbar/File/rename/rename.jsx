import React from "react";

const Rename = () => {
    const handleRenameClick=()=>{
        console.log('Rename clicked')
    };
    return(
        <button onClick={handleRenameClick}>Rename</button>
    );
}

export default Rename;
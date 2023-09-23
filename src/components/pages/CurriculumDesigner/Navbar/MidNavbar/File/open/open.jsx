import React from "react";

const Open =()=>{
    const handleOpenClick=()=>{
        console.log('open button clicked');
    };

    return(
        <button onClick={handleOpenClick}>Open</button>
    );
}

export default Open;
import React, { useState } from "react";
import './details.css';

const Details = () => {
    const handleDetailsClick=()=>{
        console.log('Detail button clicked');
    };

    return(
        <button onClick={handleDetailsClick}>Details</button>
    );
}

export default Details;
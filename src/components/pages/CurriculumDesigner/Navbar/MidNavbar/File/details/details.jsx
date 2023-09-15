import React from "react";
import './details.css';

const Details = () => {
    const handleDetailsClick=()=>{
        alert('Detail button clicked');
    };

    return(
        <button onClick={handleDetailsClick}>Details</button>
    );
}

export default Details;
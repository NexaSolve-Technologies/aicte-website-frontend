import React from "react";
import './details.css';

const Details = () => {
    const handleDetailsClick=()=>{
        alert('Detail button clicked');
    };

    return(
        <button className="file-buttons" onClick={handleDetailsClick}>Details</button>
    );
}

export default Details;
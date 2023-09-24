// import React, { useState } from "react";
import React, { useState } from 'react';
import './details.css';

const Details = () => {
    const [fileDetails, setFilesDetails]=useState(null);
    const handleDetailsClick=()=>{
        console.log('Detail button clicked');
        setTimeout=({
            
        })
    };

    return(
        <button className="file-buttons" onClick={handleDetailsClick}>Details</button>
    );
}

export default Details;
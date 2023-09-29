import React from "react";
import './details.css';
const DetailsMain = ({name, size, type,dateCreated,location, owner, dateModified}) =>{
    <div>
        
        <div className="file-details">
            <>File Details</>
            <p><strong>Name:</strong>{name}</p>
            <p><strong>Size:</strong>{size}</p>
            <p><strong>Type:</strong>{type}</p>
            <p><strong>Date Created:</strong>{dateCreated}</p>
            <p><strong>Location:</strong>{location}</p>
            <p><strong>Owner:</strong>{owner}</p>
            <p><strong>Date Modified:</strong>{dateModified}</p>
        </div>
    </div>
}
export default DetailsMain;
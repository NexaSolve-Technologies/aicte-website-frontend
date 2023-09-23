import React from "react";
import './fromtemplategallery.css';


const FROMTEMPLATEGALLERY =()=>{
    const handleFROMTEMPLATEGALLERYclick = ()=>{
        console.log('Template button clicked');
    };
    return(
        <div className="from-template-dropdown">
            <button onClick={handleFROMTEMPLATEGALLERYclick}>From template gallery</button>
        </div>
    );
};

export default FROMTEMPLATEGALLERY;
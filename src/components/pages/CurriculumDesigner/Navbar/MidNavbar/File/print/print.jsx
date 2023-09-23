import React from "react";

const Print=()=>{
    const handlePrintClick=()=>{
        window.print();
    };

    return (
        <button className="file-buttons" onClick={handlePrintClick}>Print</button>
    );
}

export default Print;
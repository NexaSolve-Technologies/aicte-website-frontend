import React from "react";

const PrintPreview=()=>{
    const handlePrintPreviewClick=()=>{
        alert('Print Preview clicked');
    };
    return (
        <button className="file-buttons" onClick={handlePrintPreviewClick}>Print Preview</button>
    );
}

export default PrintPreview;
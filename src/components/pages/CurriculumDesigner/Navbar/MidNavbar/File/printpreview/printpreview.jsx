import React from "react";

const PrintPreview=()=>{
    const handlePrintPreviewClick=()=>{
        console.log('Print Preview clicked');
    };
    return (
        <button onClick={handlePrintPreviewClick}>Print Preview</button>
    );
}

export default PrintPreview;
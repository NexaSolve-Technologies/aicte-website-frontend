import React from "react";

const Print=()=>{
    const handlePrintClick=()=>{
        window.print();
        console.log('print button clicked')
    };

    return (
        <button onClick={handlePrintClick}>Print</button>
    );
}

export default Print;
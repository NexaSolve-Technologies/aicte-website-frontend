import React from "react";

const Print=()=>{
    const handlePrintClick=()=>{
        window.print();
    };

    return (
        <button onClick={handlePrintClick}>Print</button>
    );
}

export default Print;
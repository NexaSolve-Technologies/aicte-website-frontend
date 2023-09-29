import React, { useState } from "react";
import './download.css';
// import Format from "../../Format/Format";

const Download=()=>{
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown=()=>{
        setShowDropdown(!showDropdown);
        console.log('Download button clicked');
    };

    const handleDownloadClick = (format)=>{
        setTimeout(() => {
            const blob = new Blob(["Sample file content"], { type: `application/${format}` });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `sample.${format}`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        }, 1000);      
        setShowDropdown(false);
    };

    return (
        <div className="download-button">
            <button onClick={toggleDropdown}>Download</button>
            {showDropdown && (
                <div className="dropdown">
                    <button onClick={() => handleDownloadClick('pdf')}>Download PDF</button>
                    <button onClick={() => handleDownloadClick('docx')}>Download DOC</button>
                    <button onClick={() => handleDownloadClick('png')}>Download PNG</button>
                    <button onClick={() => handleDownloadClick('jpg')}>Download JPG</button>
                    <button onClick={() => handleDownloadClick('txt')}>Download TXT</button>
                    <button onClick={()=> handleDownloadClick('csv')}>Download CSV</button>
                    <button onClick={()=> handleDownloadClick('xlsx')}>Download XLSX</button>
                    {/* if more formate,add */}
                </div>
            )};
            {/* <button className="file-buttons" onClick={toggleDropdown}>Download</button> */}
            {/* {showDropdown &&} */}
        </div>
    );
}

export default Download;

{/* iska endpoint aayega*/}
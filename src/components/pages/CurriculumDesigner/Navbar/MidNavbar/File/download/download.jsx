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
                </div>
            )};
        </div>
    );
}

export default Download;

// import React, { useState } from "react";
// import './download.css';

// const Download = () => {
//   const [showDropdown, setShowDropdown] = useState(false);

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   const handleDownloadClick = (format) => {
//     // You can add logic to handle the download for each format here.
//     console.log(`Download ${format} clicked`);
//     // For example, you can trigger the download or fetch the file data here.
//   };

//   return (
//     <div className="download-button">
//       <button onClick={toggleDropdown}>Download</button>
//       {showDropdown && (
//         <div className="dropdown">
//           <button onClick={() => handleDownloadClick("pdf")}>Download PDF</button>
//           <button onClick={() => handleDownloadClick("docx")}>Download DOCX</button>
//           <button onClick={() => handleDownloadClick("png")}>Download PNG</button>
//           {/* Add more buttons for other formats */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Download;

// import React, { useState } from "react";
// import './download.css';

// const Download = () => {
//   const [showDropdown, setShowDropdown] = useState(false);

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   const handleDownloadClick = (format) => {
//     // Simulate file download
    // setTimeout(() => {
    //   const blob = new Blob(["Sample file content"], { type: `application/${format}` });
    //   const url = window.URL.createObjectURL(blob);
    //   const a = document.createElement("a");
    //   a.href = url;
    //   a.download = `sample.${format}`;
    //   document.body.appendChild(a);
    //   a.click();
    //   window.URL.revokeObjectURL(url);
    //   document.body.removeChild(a);
    // }, 1000);

//     // Close the dropdown after clicking a format
//     setShowDropdown(false);
//   };

//   return (
//     <div className="download-button">
//       <button onClick={toggleDropdown}>Download</button>
//       {showDropdown && (
//         <div className="dropdown">
//           <button onClick={() => handleDownloadClick("pdf")}>Download PDF</button>
//           <button onClick={() => handleDownloadClick("docx")}>Download DOCX</button>
//           <button onClick={() => handleDownloadClick("png")}>Download PNG</button>
//           <button onClick={() => handleDownloadClick("jpg")}>Download JPG</button>
//           <button onClick={() => handleDownloadClick("txt")}>Download TXT</button>
//           <button onClick={() => handleDownloadClick("csv")}>Download CSV</button>
//           <button onClick={() => handleDownloadClick("xlsx")}>Download XLSX</button>
//           <button onClick={() => handleDownloadClick("mp3")}>Download MP3</button>
//           <button onClick={() => handleDownloadClick("mp4")}>Download MP4</button>
//           <button onClick={() => handleDownloadClick("zip")}>Download ZIP</button>
//           <button onClick={() => handleDownloadClick("pptx")}>Download PPTX</button>
//           <button onClick={() => handleDownloadClick("json")}>Download JSON</button>
//           <button onClick={() => handleDownloadClick("xml")}>Download XML</button>
//           <button onClick={() => handleDownloadClick("html")}>Download HTML</button>
//           <button onClick={() => handleDownloadClick("css")}>Download CSS</button>
//           {/* Add more buttons for other formats */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Download;

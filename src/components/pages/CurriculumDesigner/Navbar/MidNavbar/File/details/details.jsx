import React, { useState } from "react";
import './details.css';
import DetailsMain from "./detailsMain";

const Details = () => {
    const [isModalVisible, setisModalVisible] = useState(false);
    const[fileDetails, setFileDetails]=useState(null);

    const handledetailsClick= ()=>{
        console.log('Details button clicked');

        const fetchedDetails = async ()=>{
            try {
                const response = await fetch("api aayega bhai");
                if(!!response.ok){
                    throw new Error('HTTP error! Status: ${response.status}');
                }
                const data = await response.json();
                setFileDetails(data);
                setisModalVisible(true);
            }catch (error){
                console.log("error fetching file details:", error);
            }
        };    };
    const closeModal=()=>{
        setisModalVisible(false);
    };
    return(
        <div className="files-app">
            <button className="file-buttons" onClick={handledetailsClick}>Details</button>
            {isModalVisible && (
                <div className="details-modal">
                    <div className="details-modal-content">
                        <span className="close-details" onClick={closeModal}>&times;</span>
                        <h2>Document Details</h2>
                        {fileDetails && <DetailsMain {...fileDetails}/>}
                    </div>
                </div>
            )};
        </div>
    );
};

export default Details;

{/*js file me cors ko enable kr dena badme parse krna json file ko i guess ye sab toh kar hee diya hoga main jagah pe aate hai jo details files ka schema hoga
sari front-end input ke stirng bana dena usme , fir model bana dena mongo ka fir toh i guess bass vo get/.post hoga details file ka
*/}
import React, { useState } from 'react';
import './View.css';
const View=()=> {
    const [optionsVisible, setOptionsVisible] = useState(false);

    const toggleOptions = () => {
        setOptionsVisible(!optionsVisible);
    };

    return (
        <div className='view-wrap'>
            <button  onClick={toggleOptions} className='view-button'>View</button>
            {optionsVisible &&(
                <div className='view-options'>
                    
                </div>
            )}
        </div>
    );
};

export default View;
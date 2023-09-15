import React, { useState } from 'react';
import './Format.css';
const Format=()=> {
    const [optionsVisible, setOptionsVisible] = useState(false);

    const toggleOptions = () => {
        setOptionsVisible(!optionsVisible);
    };

    return (
        <div className='format-wrap'>
            <button onClick={toggleOptions} className='format-button'>Format</button>
            {optionsVisible &&(
                <div className='format-options'>
                    
                </div>
            )}
        </div>
    );
};

export default Format;
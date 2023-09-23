import React, { useState } from 'react';
import './Help.css';
const Help=()=> {
    const [optionsVisible, setOptionsVisible] = useState(false);

    const toggleOptions = () => {
        setOptionsVisible(!optionsVisible);
        console.log('help-button-clicked')
    };

    return (
        <div className='help-wrap'>
            <button onClick={toggleOptions} className='help-button'>Help</button>
            {optionsVisible &&(
                <div className='help-options'>
                    
                </div>
            )}
        </div>
    );
};

export default Help;
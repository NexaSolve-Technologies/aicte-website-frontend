import React, { useState } from 'react';
import './Tools.css';
const Tools=()=> {
    const [optionsVisible, setOptionsVisible] = useState(false);

    const toggleOptions = () => {
        setOptionsVisible(!optionsVisible);
        console.log('tool button clicked')
    };

    return (
        <div className='tools-wrap'>
            <button onClick={toggleOptions} className='tools-button'>Tools</button>
            {optionsVisible &&(
                <div className='tools-options'>
                    
                </div>
            )}
        </div>
    );
};

export default Tools;
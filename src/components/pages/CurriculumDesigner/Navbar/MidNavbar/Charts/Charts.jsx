import React, { useState } from 'react';
import './Charts.css';
const Charts=()=> {
    const [optionsVisible, setOptionsVisible] = useState(false);

    const toggleOptions = () => {
        setOptionsVisible(!optionsVisible);
    };

    return (
        <div className='chart-wrap'>
            <button onClick={toggleOptions} className='chart-button'>Charts</button>
            {optionsVisible &&(
                <div className='chart-options'>
                    
                </div>
            )}
        </div>
    );
};

export default Charts;
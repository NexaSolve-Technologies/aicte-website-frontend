import React, { useState } from 'react';
import './Insert.css';
const Insert=()=> {
    const [optionsVisible, setOptionsVisible] = useState(false);

    const toggleOptions = () => {
        setOptionsVisible(!optionsVisible);
    };

    return (
        <div className='insert-wrap'>
            <button onClick={toggleOptions} className='insert-button'>Insert</button>
            {optionsVisible &&(
                <div className='insert-options'>
                    
                </div>
            )}
        </div>
    );
};

export default Insert;
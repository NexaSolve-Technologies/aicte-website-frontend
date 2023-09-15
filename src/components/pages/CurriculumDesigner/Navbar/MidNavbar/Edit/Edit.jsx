import React, { useState } from 'react';
import './Edit.css';
const Edit=()=> {
    const [optionsVisible, setOptionsVisible] = useState(false);

    const toggleOptions = () => {
        setOptionsVisible(!optionsVisible);
    };

    return (
        <div className='edit-wrap'>
            <button onClick={toggleOptions} className='edit-button'>Edit</button>
            {optionsVisible &&(
                <div className='edit-options'>
                    
                </div>
            )}
        </div>
    );
};

export default Edit;
import React, { useState } from 'react';
import './File.css';

const File=()=> {
    const [optionsVisible, setOptionsVisible] = useState(false);

    const toggleOptions = () => {
        setOptionsVisible(!optionsVisible);
    };

    return (
        <div className='file-wrap'>
            <button onClick={toggleOptions} className='file-button'>File</button>
            {optionsVisible &&(
                <div className='file-options'>
                    <a href='#'>option 1</a>
                    <a href='#'>Option 1</a>
                    <a href='#'>Option 2</a>
                    <a href='#'>Option 3</a>
                    <a href='#'>Option 4</a>
                    <a href='#'>Option 5</a>
                    <a href='#'>Option 6</a>
                    <a href='#'>Option 7</a>
                    <a href='#'>Option 8</a>
                    <a href='#'>Option 9</a>
                    <a href='#'>Option 10</a>
                </div>
            )}
        </div>
    );
}

export default File;
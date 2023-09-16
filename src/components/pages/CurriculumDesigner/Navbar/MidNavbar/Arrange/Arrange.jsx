import React,{useState} from 'react';
import './Arrange.css';

const Arrange=()=> {
    const [optionsVisible, setOptionsVisible] = useState(false);

    const toggleOptions = () => {
        setOptionsVisible(!optionsVisible);
    };


    return (
        <div className='arrange-button-wrap'>
            <button onClick={toggleOptions} className='arrange-button'>Arrange</button>
            {optionsVisible && (
                <div className='arrange-options'>
                </div>
            )}
        </div>
    );
}

export default Arrange;

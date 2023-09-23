import React, { useState } from 'react';
import './File.css';
import New from './new/new';
import Open from './open/open';
import Share from './share/share';
import Download from './download/download';
import Rename from './rename/rename';
import MoveToTrash from './movetotrash/movetotrash';
import VersionHistory from './versionhistory/versionhistory';
import Details from './details/details';
import PrintPreview from './printpreview/printpreview';
import Print from './print/print';

const File=()=> {
    const [optionsVisible, setOptionsVisible] = useState(false);

    const toggleOptions = () => {
        console.log('file-button-clicked')
        setOptionsVisible(!optionsVisible);
    };

    return (
        <div className='file-wrap'>
            <button onClick={toggleOptions} className='file-button'>File</button>
            {optionsVisible &&(
                <div className='file-options'>
                    <New/>
                    <Open/>
                    <Share/>
                    <Download/>
                    <Rename/>
                    <MoveToTrash/>
                    <VersionHistory/>
                    <Details/>
                    <PrintPreview/>
                    <Print/>
                    {/* <a href='#'>option 1</a>
                    <a href='#'>Option 1</a>
                    <a href='#'>Option 2</a>
                    <a href='#'>Option 3</a>
                    <a href='#'>Option 4</a>
                    <a href='#'>Option 5</a>
                    <a href='#'>Option 6</a>
                    <a href='#'>Option 7</a>
                    <a href='#'>Option 8</a>
                    <a href='#'>Option 9</a>
                    <a href='#'>Option 10</a> */}
                </div>
            )}
        </div>
    );
};

export default File;
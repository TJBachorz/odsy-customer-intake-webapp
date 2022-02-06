import React from 'react';

import FileUploader from './FileUploader';

const SideDrawer = ({ submitFileUpload }) => {
    return (
        <div id="odsy-header-container">
            <header id="odsy-header">
                Outdoor.sy
            </header>
            <FileUploader submitFileUpload={submitFileUpload}/>
        </div>
    );
}

export default SideDrawer;
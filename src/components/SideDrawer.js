import React from 'react';

import FileUploader from './FileUploader';

const SideDrawer = () => {
    return (
        <div id="odsy-header-container">
            <header id="odsy-header">
                Outdoor.sy
            </header>
            <FileUploader/>
        </div>
    );
}

export default SideDrawer;
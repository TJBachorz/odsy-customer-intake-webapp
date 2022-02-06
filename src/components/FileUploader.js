import React from 'react';

const FileUploader = () => {
    return (
        <div id="file-upload-container">
            <form id="file-upload-form">
                <input id="file-upload-button" type="file" name="filename">
                    Upload File
                </input>
                <button id="file-upload-submit">Submit</button>
            </form>
        </div>
    );
}

export default FileUploader;
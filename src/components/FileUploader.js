import React from 'react';

const FileUploader = () => {
    return (
        <div id="file-upload-container">
            <form id="file-upload-form">
                <input className="form-element" id="file-upload" type="file" name="filename"></input>
                <button className="form-element" id="file-submit" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default FileUploader;
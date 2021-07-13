import React from 'react'

function Rules() {
    return (
        <div className='rules-main'>
            <h1>How to compress images?</h1>
            <ul className='rules-point'>
            <li>Click Upload button and select the file to be compressed.(JPG, JPEG, PNG, GIF, WEBP)</li>
            <li>Enter the size to be compressed in Kb in the input box. By default the value is 20Kb.</li>
            <li>Once the required size is entered click Compress button.</li>
            <li>The compressed image is shown in the compressed image container. Click the download button below to download it.</li>
            <li>We won't store any images that you upload/compress in our website</li>
            </ul>
        </div>
    )
}

export default Rules

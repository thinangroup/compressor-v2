import React from 'react'

function Rules() {
    return (
        <div className='rules-main'>
            <h2 style={{marginBottom: '0px'}}>How to compress images?</h2>
            <ul className='rules-point' style={{marginLeft: '0px'}}>
            <li>Click Upload button and select the file to be compressed.(JPG, JPEG, PNG, GIF, WEBP, ICO)</li>
            <li>Enter the size to be compressed in Kb in the input box. By default the value is <span>20Kb</span>.</li>
            <li>Once the required size is entered click Compress button.</li>
            <li>The compressed image is shown in the <span>compressed image container </span>. Click the download button below to download it.</li>
            <li><span>We won't store any images that you upload/compress in our website</span></li>
            </ul>
        </div>
    )
}

export default Rules

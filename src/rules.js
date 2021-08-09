import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import './App.css';

export default function Rules() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth='xl' className='mainContentStyle'>
                <div className='rules-main main-content'>
                    <h2 style={{ marginBottom: '0px' }}>Steps to follow:</h2>
                    <ul className='rules-point main-content-para' style={{ marginLeft: '0px' }}>
                        <li>	Click the custom upload button.</li>
                        <li>	The file explorer appears. Browse the folder where the image to be upload is present, click the image  and click ok</li>
                        <li>	After the image is uploaded, the image appears on the image space provided above.</li>
                        <li>	Now enter the size(in KB), the image to be compressed in the space provided.</li>
                        <li>	Click the compress button. The compressed image now appears in the given section.</li>
                        <li>	Click the download button provided. Now the compressed image is successfully downloaded.</li>
                        Note: compresstheimage.com compress JPEG, JPG, PNG, GIF, ICO and WEBP

                    </ul>
                </div >
            </Container>
        </React.Fragment>
    );
}

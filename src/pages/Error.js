import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Social from '../components/social';
import RectangleGoogleAds from '../GoogleAds/rectangle';

export default function Error() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md" style={{ background: 'white' }}>
                <div className='rules-main'>
                    <h1 style={{ marginBottom: '0px' }}>Error : Page not found</h1>
                    <p  style={{ textIndent: '50px' }}>
                       Click here for <a href='/'>Compresstheimage's homepage</a>
                    </p>
                </div>
                <Social/>
            </Container>
            <Container maxWidth="md"><RectangleGoogleAds slot='4755549069'/></Container>
        </React.Fragment>
    );
}
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './App.css';

export default function MainContent() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container  maxWidth='sm' className='mainContentStyle'>
                <Typography component="div"  >
                    <div className='main-content'>
                        <p className='main-content-para'>
                            This <span className='spanBold'>Online Image Compressor</span> (size reducing) tool is best to use  because
                            <span className='spanBold'> we don't store any images </span> that you upload/compress in our website.
                            <span className='cutWord'> It also uses a combination of best
                            optimization and modern compression techniques to <span className='spanBold'>compress the JPG, JPEG, PNG, WEBP, ICO and GIF </span>
                            images to the required size without compromising the quality.</span>
                            <span className='displayMobile'> We compress <span>JPG, JPEG, PNG, WEBP, ICO and GIF</span></span>
                        </p>
                    </div>
                </Typography>
            </Container>
        </React.Fragment>
    );
}
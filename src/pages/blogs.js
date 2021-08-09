import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Social from '../components/social';
import Navbar from '../components/navbar';
import Cards from '../components/cards';

export default function Blogs() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Navbar />
            <Container maxWidth="md" style={{ marginTop: '40px', position: 'relative' }}>
                <div className='blogsView'>
                    <Cards image="https://cdn.kastatic.org/ka-perseus-images/cdaa3bfc074058fe11e9fd6dad9ae3f419359372.svg" heading='Why Do We Compress Images ?' kathai='We compress the image for various reasons. One the most important reason for
                        compressing the image is to reduce the space. Compressing images forms like  . . . ' link='/why-do-we-compress-images' />
                    <Cards image="https://cdn.mos.cms.futurecdn.net/TdaG9Gex57AHnRZG79wYKT-970-80.jpg.webp" heading='Different types of image formats' kathai='GIF: Graphics Interchange Format(GIF)  is a bitmap image format  that supports
                    8 bits per pixel, that is an image can have 256 distinct colors. One of the major . . . ' link='/different-types-of-image-formats' />

                </div>

            </Container>
            <Social position='sticky' />
        </React.Fragment>
    );
}
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Social from '../components/social';
import Navbar from '../components/navbar';
import '../styles/kadhai.css';
import RectangleGoogleAds from '../GoogleAds/rectangle';

export default function KadhaiKulKathai() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Navbar />

            <Container maxWidth="md" className="kadhaiMainContainer" >
                <RectangleGoogleAds slot='4755549069' />
                <div className='rules-main'>
                    <h2 className="kadhaiHeading">Different types of image formats:</h2>
                    <p className='rules-point kadhai'>

                        <li> <b>GIF:  </b><br></br>
                            <p style={{ margin: '0px', textIndent: '100px' }}>Graphics Interchange Format(GIF)  is a bitmap image format  that supports
                                8 bits per pixel, that is an image can have 256 distinct colors. One of the major
                                advantage of using GIF is it gives animated formats of image. It does not have sounds,
                                it has only animated images. This type of image can be compressed by using Lossless data
                                compression technique which reduce the size without affecting the quality of the image.
                            </p></li>
                        <li> <b>JPEG: </b><br></br>
                            <p style={{ margin: '0px', textIndent: '100px' }}>JPEG stands for Joint Photographic Experts Groups. This image format
                                is widely used all over the world. This is famous for its popularity and
                                it also supports in every system. These can also be compressed using lossy compression
                                technique which can easily be compressed to the required size with maximum attain of the quality.
                            </p></li>
                        <RectangleGoogleAds slot='4755549069' />
                        <li> <b>PNG:  </b><br></br>
                            <p style={{ margin: '0px', textIndent: '100px' }}>PNG means Portable Network Graphics. This image has a special ability to be invisible ie where
                                there is no image and it may have white spaces in other image formats where as this image becomes
                                transparent. This is used to give best UI designs where the images can adapt to the themes the user
                                want, Like dark mode or lite mode. Most of the logos are PNG file format.
                            </p></li>

                        <li> <b>WEBP:</b><br></br>
                            <p style={{ margin: '0px', textIndent: '100px' }}>WEBP is modern image format that supports transparency as PNG and also gives the effect of JPEG.
                                Most of the websites now started to use WEBP format because it gives same quality as in much lower
                                in size.  WebP is still not supported by most of the browsers, many feedbacks are raised to include
                                webp as a supporting image format by website developers.
                            </p></li>


                    </p>
                </div>
                <RectangleGoogleAds slot='4755549069' />
            </Container>

            <Social position='sticky' />
        </React.Fragment>
    );
}
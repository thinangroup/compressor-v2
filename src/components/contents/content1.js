import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import '../../styles/kadhai.css';
import RectangleGoogleAds from '../../GoogleAds/rectangle';

export default function Content1() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md" className='kadhaiMainContainer'>
                
                <div className='rules-main'>
                    <h2 className='kadhaiHeading'>Why do we Compress images?</h2>
                    <p className='rules-point kadhai'>
                        <li> We compress the image for various reasons. One the most important reason for
                            compressing the image is to <b>reduce the space</b>. Compressing images are know in various
                            forms like reducing image  size, optimizing the image. Most of the websites around the world
                            uses different compression techniques or size reducing technique to improve the site's
                            performance. They first take the original image and reduce the size of the image(in kb)
                            for best loading performance. By reducing the size the loading performance is increased.
                            Though many effective compression techniques are used the websites may still lag in
                            performance where there is a requirement of many images. </li>
                        <li>In simple terms to describe why image compression is used. We have a memory card which has
                            a space of 32GB. This memory card can hold 32,768 images of size (1MB). If we reduce the
                            size by half of the image i.e 0.5MB then the memory card can hold upto 65,536. When reducing
                            the size or <b>optimizing the image</b>, will result in loss of quality but it does save more space.
                            This is just an example for a small amount of space. Think about a <b>multinational companies</b> or
                            <b> E-Commerce websites</b>, they have million and billions of images which require many servers and
                            it costs them more. By reducing the size they save millions of dollars.</li>
                        <RectangleGoogleAds slot='4755549069' />
                        <li>You may also note that many companies when asking for job applications they limit the
                            size of the image to be uploaded. They limit the size like <b>compress to 200kb / resize
                                to 200kb , compress to 100kb / resize to 100kb</b>. They mention the size just because to
                            save their amount that is spent on the  servers which store the images. Mostly MNC's
                            prefer different compression and there are also many companies who try to reduce the
                            compression with maintaining the quality.There are two types of compression techniques
                            for different images formats. By not knowing which compression method  to be used may
                            lead to loss in quality of the image. They are lossless and lossy compression.
                        </li>
                        <li>In this busy world, compressing images plays the major role in optimizing the space and reduce the cost in storage
                            by reducing the size of images/photos from 200kb to 50kb/10kb. In some cases only one or two images is to be
                            compressed in such case, online image compressor's are used where
                            the requirements are like compress to 200kb, compress to 50kb, compress to 100kb. </li>
                        <li>
                            Image online optimizer are used in those cases to save time and space. In this service we compresstheimage.com
                            also provide you with optimizing images, resize image(size in kb). These are the tools which is used
                            by students, teachers for their personal and official works. It is also used by some graduates
                            who apply for jobs where the image is to be compressed for required size. Optimized images places major role in space
                            where as different image compression techniques places a vital role in it by mainting the quality. These are usually
                            called by different names they are Web image optimizer, Image online compress, optimizer Online,
                            image compression and image optimizer.
                        </li>
                    </p>
                </div>
                
            </Container>

        </React.Fragment>
    );
}


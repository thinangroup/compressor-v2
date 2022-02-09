import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Social from '../components/social';
import Navbar from '../components/navbar';
import '../styles/kadhai.css';
import Content1 from '../components/contents/content1';
import RectangleGoogleAds from '../GoogleAds/rectangle';


export default function Maze() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Navbar />
            <RectangleGoogleAds slot='4755549069' />
            <Content1/>
            <RectangleGoogleAds slot='4755549069' />
            <Social position='sticky' />
        </React.Fragment>
    );
}


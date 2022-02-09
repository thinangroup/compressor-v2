import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Social from '../components/social';
import Navbar from '../components/navbar';
import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib'
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'

export default function Jigsaw2() {
    const [okButton, setOkButton] = useState("");
    return (
        <React.Fragment>
            <CssBaseline />
            <Navbar />
            <Container maxWidth="md" style={{ marginTop: '30px', position: 'relative' }}>
                <JigsawPuzzle
                    imageSrc='https://image.shutterstock.com/image-illustration/fire-letter-j-600w-82443457.jpg'
                    rows={2}
                    columns={2}
                    onSolved={() => { alert('Not Bad... You too Have hidden talents'); setOkButton(1) }}
                />
            </Container>
            {okButton ?
                <div className='align-button'>
                    <a className='custom-file-upload' style={{ background: '#FC8B06', color: 'white', textDecoration: 'none' }} href='/' >
                        Click For More
                    </a> </div>
                : <div></div>}
        </React.Fragment>
    );
}
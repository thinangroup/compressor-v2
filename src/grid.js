import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MediaCard from './components/imageview';
import upload from './images/upload.png';
import download from './images/download.png';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import imageCompression from "browser-image-compression";
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Spinner from './components/spinner';
import RectangleGoogleAds from './GoogleAds/rectangle';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        background: '#ECECEC',
        borderRadius: "20px",
    },
    logo: {
        align: "start",
        objectFit: 'contain',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
    },
    rules: {
        textAlign: "left",
        paddingLeft: "10px",
        borderRadius: "20px",
    },
    header: {
        height: '120px',
        minWidth: '316px',
    },

    grid: {
        backgroundColor: 'red',
    }

}));

export default function FullWidthGrid() {
    const [origImage, setOrigImage] = useState("");
    const [origImageFile, setorigImageFile] = useState("");
    const [compressImage, setcompressImage] = useState("");
    const [filename, setfilename] = useState("");
    const [filesize, setfilesize] = useState("");
    const [value, setValue] = useState(20 / 1024);
    const [spinner, setSpinner] = useState('');


    const handle = (e) => {
        const imagefile = e.target.files[0];
        const size = (imagefile.size / 1024) / 1024;
        setfilesize(size);
        setOrigImage(imagefile);
        setorigImageFile(URL.createObjectURL(imagefile));
        setfilename(imagefile.name);
        document.getElementById('Upload Button').scrollIntoView({ behavior: "smooth" });
    };

    const handleCompressImage = (e) => {
        e.preventDefault();
        const options = {
            maxSizeMB: value,
            useWebWorker: true,
        };
        let output;
        if (value >= filesize) {
            setSpinner('');
            return alert('Enter size less than ' + (filesize * 1024).toFixed(0) + 'KB');
        }
        imageCompression(origImage, options).then((x) => {
            console.log('else', value, filesize)
            output = x;
            const downloadLink = URL.createObjectURL(output);
            setcompressImage(downloadLink);
            setSpinner('');
            document.getElementById('compress button').scrollIntoView({ behavior: "smooth" });
        })
    }
    function spinnerStart() {
        setSpinner('true');
    }

    function valueChanged(evt) {
        const kbSize = evt.target.value / 1024;
        setValue(kbSize);
    }

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container maxWidth="md">
            <Grid style={{ margin: '5px 0px'}}><RectangleGoogleAds slot='1452466980'/></Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4} id="Upload Button">
                        <Paper className={classes.paper}>
                            <div className="compress">
                                <label className="custom-file-upload " >
                                    CUSTOM UPLOAD
                                    <input onChange={(e) => handle(e)}
                                        type="file" accept="image/*"
                                    />
                                </label>
                            </div>
                            {origImageFile ? (
                                <MediaCard image={origImageFile} title='upload Image' alt='upload' />
                            ) : (
                                <MediaCard image={upload} title='upload Image' alt='upload' />
                            )}


                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4} id='compress button'>
                        <Paper className={classes.paper}>
                            {origImageFile ? (<TextField style={{ marginBottom: '10px' }} defaultValue="20" id="outlined-basic" onChange={valueChanged} type='number' size="small" label="Compression Size in KB" />
                            ) : (<TextField style={{ marginBottom: '10px' }} defaultValue="20" disabled id="outlined-basic" onChange={valueChanged} type='number' size="small" label="Compression Size in KB" />)}
                            {origImageFile ? (
                                <Button style={{ background: '#FC8B06', color: 'white', borderRadius: "20px", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }} variant="contained" color="primary" onClick={(e) => { spinnerStart(); handleCompressImage(e); }} > Compress Image </Button>) :
                                (
                                    <Button style={{ background: '#e0e0e0', color: '#a8a8a8', borderRadius: "20px", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }} variant="contained" color="primary" onClick={(e) => handleCompressImage(e)} disabled> Compress Image </Button>)}
                            {spinner ? <div style={{ display: 'flex', float: 'right' }}><Spinner /></div> : <div></div>}
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4} id='Download image'>
                        <Paper className={classes.paper}>
                            {compressImage ? (
                                <div className="compress">
                                    <a className='custom-file-upload' style={{ background: '#FC8B06', color: 'white', textDecoration: 'none' }} href={compressImage} download={filename} >
                                        DOWNLOAD IMAGE
                                    </a>
                                </div>) :
                                (<div className="compress">
                                    <a href={compressImage} className='custom-file-upload' style={{ background: '#e0e0e0', color: '#a8a8a8', textDecoration: 'none' }}  >
                                        DOWNLOAD IMAGE
                                    </a>
                                </div>)}

                            {compressImage ? (
                                <a href={compressImage} download={filename}>
                                    <MediaCard image={compressImage} title='Download Image' alt='download' />
                                </a>
                            ) : (
                                <MediaCard image={download} title='Download Image' alt='download' />
                            )}

                        </Paper>
                    </Grid>

                </Grid>
                <Grid style={{ marginTop: '5px'}}><RectangleGoogleAds slot='4755549069'/></Grid>
            </Container>


        </div >
    );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MediaCard from './imageview';
import logo from "./images/header.png";
import upload from './images/upload.png';
import download from './images/download.png';
import Social from './social';
import Rules from './rules';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import imageCompression from "browser-image-compression";
import Button from '@material-ui/core/Button';
import MainContent from './maincontent';
import Kadhai from './kathai';
import EngalaPathi from './engalapathi'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: '#141850',
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

    },
    header: {
        height: '120px',
        minWidth: '316px',
    },

    grid: {
        backgroundColor: '#ef9273',
    }

}));

export default function FullWidthGrid() {
    const [origImage, setOrigImage] = useState("");
    const [origImageFile, setorigImageFile] = useState("");
    const [compressImage, setcompressImage] = useState("");
    const [filename, setfilename] = useState("");
    const [value, setValue] = useState(20 / 1024);


    const handle = (e) => {
        const imagefile = e.target.files[0];
        setOrigImage(imagefile);
        setorigImageFile(URL.createObjectURL(imagefile));
        setfilename(imagefile.name);
    };

    const handleCompressImage = (e) => {
        e.preventDefault();

        const options = {
            maxSizeMB: value,
            maxWidthOrHeight: 500,
            useWebWorker: true,
        };

        let output;
        imageCompression(origImage, options).then((x) => {
            output = x;
            const downloadLink = URL.createObjectURL(output);
            setcompressImage(downloadLink);
        })
    }
    function valueChanged(evt) {
        const kbSize = evt.target.value / 1024;
        setValue(kbSize);
    }

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Paper className={classes.logo}>
                        <img className={classes.header} src={logo} alt='compresstheimage.com' />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.logo}>
                        <MainContent />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        {origImageFile ? (
                            <MediaCard image={origImageFile} title='upload Image' alt='upload' />
                        ) : (
                            <MediaCard image={upload} title='upload Image' alt='upload' />
                        )}

                        <div className="compress">
                            <label className="custom-file-upload " >
                                CUSTOM UPLOAD
                                <input onChange={(e) => handle(e)}
                                    type="file" accept="image/*"
                                />
                            </label>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        <TextField style={{ marginBottom: '10px' }} defaultValue="20" id="outlined-basic" onChange={valueChanged} type='number' size="small" label="Compression Size in KB" variant="outlined" />
                        {origImageFile ? (<Button variant="contained" color="primary" onClick={(e) => handleCompressImage(e)} > Compress Image </Button>) :
                            (<Button variant="contained" color="primary" onClick={(e) => handleCompressImage(e)} disabled> Compress Image </Button>)}
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        {compressImage ? (
                            <MediaCard image={compressImage} title='Download Image' alt='download' />
                        ) : (
                            <MediaCard image={download} title='Donwload Image' alt='download' />
                        )}
                        {compressImage ? (
                            <div className="compress">
                                <a className='custom-file-upload' style={{ color: 'white', textDecoration: 'none' }} href={compressImage} download={filename} >
                                    DOWNLOAD IMAGE
                                </a>
                            </div>) :
                            (<div className="compress">
                                <a href="/#" className='custom-file-upload' style={{ background: '#e0e0e0', color: '#a8a8a8', textDecoration: 'none' }}  >
                                    DOWNLOAD IMAGE
                                </a>
                            </div>)}
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.rules}>
                        <Rules />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.rules}>
                        <Kadhai/>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.rules}>
                        <EngalaPathi/>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.icons}>
                        <Social />
                    </Paper>
                </Grid>

            </Grid>
        </div>
    );
}
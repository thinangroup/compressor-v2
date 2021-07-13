import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MediaCard from './imageview';
import ContainedButtons from './button'
import logo from "./logo.jpg"
import Social from './social';
import Rules from './rules';
import Numberinkb from './numberinkb';
import {useState} from 'react';
import imageCompression from "browser-image-compression";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    logo: {
        align: "start",
    },
    rules: {
        textAlign: "left",
        paddingLeft: "10px",

    },
    icons:{

    }
}));

export default function FullWidthGrid() {
    const [origImage, setOrigImage] = useState("");
    const [origImageFile, setorigImageFile] = useState("");
    const [compressImage, setcompressImage] = useState("");
    const [filename, setfilename] = useState("");
    const [value, setValue] = useState(20/1024);
  
  
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
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.logo}>
                        <img src={logo} />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}><MediaCard />
                    <div className="compress">
                    <label class="custom-file-upload " >
                      Custom Upload
                      <input onChange={(e) => handle(e)}
                        type="file" accept="image/*"
                      />
                    </label>
                  </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        <Numberinkb  />
                        <ContainedButtons name='Compress' />
                        </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        <MediaCard />
                        <ContainedButtons name='Download' />
                        </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.rules}>
                        <Rules  />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.icons}>
                        <Social  />
                    </Paper>
                </Grid>

            </Grid>
        </div>
    );
}
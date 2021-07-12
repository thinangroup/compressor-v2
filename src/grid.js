import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MediaCard from './imageview';
import ContainedButtons from './button'
import logo from "./logo.jpg"
import Social from './social';
import Rules from './rules';
import Numberinkb from './numberinkb'


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
                        <ContainedButtons />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        <Numberinkb  />
                        <ContainedButtons />
                        </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        <MediaCard />
                        <ContainedButtons />
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
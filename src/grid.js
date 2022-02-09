import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


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

    return (
        <div >
            <Container maxWidth="md">
                <Grid className={useStyles.grid} >
                    <Grid item id="jigsaw1" >
                        <img src='https://s3-us-west-2.amazonaws.com/scorestream-team-profile-pictures/297450/20181011004730_958_mascotOrig.png' alt="jigsaw1" />
                    </Grid>
                    <Grid item id='maze'>


                    </Grid>
                    <Grid item id='jigsaw2'>

                    </Grid>

                </Grid>
            </Container>


        </div >
    );
}
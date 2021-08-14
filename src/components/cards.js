import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        maxWidth: 290,
        marginBottom:20,
        marginRight: 20,
    },
    media: {
        maxHeight: 200,
        maxWidth: 290,
        objectFit: 'contain' ,
    },
});

export default function Cards(props) {
    const classes = useStyles();

    return (
        <a href={props.link} style = {{textDecoration: 'none'}}>
        <Card className={classes.root} >
            <CardActionArea>
                {/* <CardMedia
                    className={classes.media}
                    image={props.image}
                    title={props.heading}
                   
                /> */}
                <img className={classes.media} src={props.image}
                    alt={props.heading} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.heading}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.kathai}

                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>

                <Button size="small" color="primary" href={props.link}>
                    Read More
                </Button>

            </CardActions>
        </Card>
        </a>
    );
}
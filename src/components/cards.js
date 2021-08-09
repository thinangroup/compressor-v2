import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: 30,
    },
    media: {
        height: 200,
    },
});

export default function Cards(props) {
    const classes = useStyles();

    return (
        <a href={props.link} style = {{textDecoration: 'none'}}>
        <Card className={classes.root} >
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title="Contemplative Reptile"
                />
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
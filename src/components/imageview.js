import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    borderRadius:'20px',
    
  },
  media: {
    height: 250,
    objectFit: 'contain',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    background:"#ECECEC",
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component='img'
          className={classes.media}
          image={props.image}
          title={props.title}
          alt={props.alt}
        />
      </CardActionArea>
    </Card>
  );
}

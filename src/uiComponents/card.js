import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import img from '../images/image.webp'
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function MediaCard(props) {
    
    const [Color, setColor] = useState('action');

    const classes = useStyles();

    return (
        <Card className={classes.root} >
            <CardActionArea>
                <IconButton aria-label="add to favorites" className="abs" onClick={()=>{Color=='action'? setColor("secondary"): setColor("action")}}>
                    <FavoriteIcon color={Color} />
                </IconButton>
                <CardMedia
                    className={classes.media}
                    image={img}
                    onClick={()=>{props.homeFunc({price:props.price, desc:props.description, img:img, location:props.location, time:props.time, title:props.title})}}

                />
                <CardContent onClick={()=>{props.homeFunc({price:props.price, desc:props.description, img:img, location:props.location, time:props.time, title:props.title})}}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.price}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" className="justify-content-center" component="p">
                        {props.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className="pointer" onClick={()=>{props.homeFunc({price:props.price, desc:props.description, img:img, location:props.location, time:props.time, title:props.title})}}>
                <small> {props.location}</small>
                <small className="ml-auto"> {props.time}</small>
            </CardActions>
        </Card>
    );
}
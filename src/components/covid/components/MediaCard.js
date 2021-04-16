import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({country,code}) {
  const classes = useStyles();
  code = code.toLowerCase()
 
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`https://www.countryflags.io/${code.toString()}/shiny/64.png`}
          title={country}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h4">
            {country}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Link to={`/country/${country}`}>More</Link>
      </CardActions>
    </Card>
  );
}

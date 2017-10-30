import React from 'react';

import Card, { CardHeader, CardMedia, CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { colors } from '../helpers/theme';

const style = {
  margin: '0 -8px',
  borderBottom: '1px solid #ccc',

  card: {
    boxShadow: 'unset',

    headline: {
      fontSize: '16px'
    },
    subheader: {
      color: colors.text2,
      marginTop: '10px'
    },
    media: {
      height: '200px',
    },
    videoWrapper: {
      padding: 0,
    },
    video: {
      border: 'none',
      width: '100%',
      frameBorder: 0,
    }
  }

}


const CardItem = (props) => (
  <div style={style}>
    <Card style={style.card}>
      <CardContent>
        <Typography type='headline' style={style.card.headline}>
          {props.title}
        </Typography>
        <Typography type='body1' style={style.card.subheader}>
          {props.subheader}
        </Typography>
      </CardContent>

      {props.image ? <CardMedia style={style.card.media} image={props.image} /> : ''}
      {props.video ?
        <CardContent style={style.card.videoWrapper}>
          <iframe style={style.card.video} id="ytplayer" type="text/html" width="640" height="320" src={props.video+'?modestbranding=true'}>
          </iframe>
        </CardContent>
      :''}


      <CardContent>
        <Typography paragraph>
          {props.content}
        </Typography>
      </CardContent>

      {props.buttonText ?
        <CardActions>
          <Button dense color="primary">
            {props.buttonText}
          </Button>
        </CardActions>
      :''}

    </Card>
  </div>
);


export default CardItem;

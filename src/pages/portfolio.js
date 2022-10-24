import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


function Porfolio() {
    const styles = {
        card: {
          display:"flex",
          padding: "1rem",
          justifyContent : "space-around"
        }
      }
    const members = [
        {name: "Shamuel Polis",talents: "----"},
        {name: "Ryan",talents: "----"},
        {name: "Norman",talents: "----"}
    ]
  return (
    <div style={styles.card}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ"
          alt="prev"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {members[0].name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {members[0].talents}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a>preview</a>
        </Button>
      </CardActions>
    </Card>

<Card sx={{ maxWidth: 345 }}>
<CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ"
          alt="prev"
        />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      {members[1].name}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {members[1].talents}
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions>
  <Button size="small" color="primary">
    <a>preview</a>
  </Button>
</CardActions>
</Card>

<Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <CardMedia
          component="img"
          height="140"
          image="https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ"
          alt="prev"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {members[2].name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {members[2].talents}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a>preview</a>
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}
export default Porfolio
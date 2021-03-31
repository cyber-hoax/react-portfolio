import React from 'react'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img1 from '../assets/portfolio-img1.jfif'
import img2 from '../assets/portfolio-img2.jfif';
import img3 from '../assets/portfolio-img3.jfif';
import img4 from '../assets/portfolio-img4.jfif';
import img5 from '../assets/portfolio-img5.jfif'; 
import img6 from '../assets/portfolio-img6.jfif'; 






const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: '130px',

    height: '160vh',
    backgroundColor: '#e8e8e8',
  },
  container: {
    marginLeft: 210,
    width: '150vh',
  },
  content: {
    
    marginTop: 100,
  },
  roots: {
    maxWidth: 375,
    borderRadius: 20,
    
  },
  typo: {
    textAlign: 'center',
  },
  btn: {
    marginTop: 30,
  },
}));


export default function Portfolio (){
    const classes = useStyle()
    return (
      <>
        <div id='portfolio' className={classes.root}>
          <Typography className={classes.typo} variant='h3'>
            Portfolio
          </Typography>
          <Grid
            container
            className={classes.container}
            spacing={4}
          >
            <Grid className={classes.content} item md={4}>
              <Card className={classes.roots}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    component='img'
                    alt='Contemplative Reptile'
                    height='250'
                    image={img1}
                    title='Contemplative Reptile'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      Web Development
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    className={classes.btn}
                    size='small'
                    color='secondary'
                  >
                    Share
                  </Button>
                  <Button
                    className={classes.btn}
                    size='small'
                    color='secondary'
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid className={classes.content} item xs={4}>
              <Card className={classes.roots}>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    alt='Contemplative Reptile'
                    height='250'
                    image={img2}
                    title='Contemplative Reptile'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      Android Development
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    className={classes.btn}
                    size='small'
                    color='secondary'
                  >
                    Share
                  </Button>
                  <Button
                    className={classes.btn}
                    size='small'
                    color='secondary'
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid className={classes.content} item xs={4}>
              <Card className={classes.roots}>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    alt='Contemplative Reptile'
                    height='250'
                    image={img3}
                    title='Contemplative Reptile'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      AR/VR
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    className={classes.btn}
                    size='small'
                    color='secondary'
                  >
                    Share
                  </Button>
                  <Button
                    className={classes.btn}
                    size='small'
                    color='secondary'
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>

          <Grid container className={classes.container} spacing={5}>
            <Grid className={classes.content} item md={4}>
              <Card className={classes.roots}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    component='img'
                    alt='Contemplative Reptile'
                    height='250'
                    image={img4}
                    title='Contemplative Reptile'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      Cloud
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    className={classes.btn}
                    size='small'
                    color='secondary'
                  >
                    Share
                  </Button>
                  <Button
                    className={classes.btn}
                    size='small'
                    color='secondary'
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid className={classes.content} item xs={4}>
              <Card className={classes.roots}>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    alt='Contemplative Reptile'
                    height='250'
                    image={img5}
                    title='Contemplative Reptile'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      Game Engine
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    className={classes.btn}
                    size='small'
                    color='secondary'
                  >
                    Share
                  </Button>
                  <Button
                    className={classes.btn}
                    size='small'
                    color='secondary'
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid className={classes.content} item xs={4}>
              <Card className={classes.roots}>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    alt='Contemplative Reptile'
                    height='250'
                    image={img6}
                    title='Contemplative Reptile'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      Vortex
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    className={classes.btn}
                    size='small'
                    color='secondary'
                  >
                    Share
                  </Button>
                  <Button
                    className={classes.btn}
                    size='small'
                    color='secondary'
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </div>
      </>
    );
}
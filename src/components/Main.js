import React from 'react';
import mainImage from '../assets/main-img.svg'
import Grid from '@material-ui/core/Grid'

import {makeStyles} from '@material-ui/core/styles'
import { Typography } from '@material-ui/core/';

const useStyle = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },

  mainImage: {
    position: 'relative',
    top: '190px',
    right: '50px',
    width: '100%',
    height: '500px',
  },
  main: {
    position: 'relative',
    top: '350px',
    left: '300px',
    fontSize: '40px',
  },
  tagline: {
    position: 'relative',
    left: '80px',
    fontSize: '20px',
  },
}));


export default function Main(){
    const classes = useStyle()
    
    return (
      <div className={classes.root} id='main'>
        <Grid container direction='row' justify='flex-end'>
          <Grid item md={6}>
            <Typography className={classes.main}>
              Hello this is Raunak
              <p className={classes.tagline}>welcome to my page!</p>
            </Typography>
          </Grid>

          <Grid item md={6}>
            <img className={classes.mainImage} src={mainImage} alt='' />
          </Grid>
        </Grid>
      </div>
    );
}
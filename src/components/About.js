import React from 'react';
import '../App.css';
import aboutImg from '../assets/about-section.svg'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '110px',
    height: '80vh',
    backgroundColor: '#222831',
  },

  paper: {
    textAlign: 'center',
  },
  typo: {
    color: 'white',
    textAlign: 'end',
    marginRight: '280px',
  },
  imagContainer: {
    height: 500,
  },
  img: {
    width: '100%',
  },
  aboutContent: {
    color: 'white',
    fontSize: 23,
    paddingTop: 15,
    marginTop: 15,
    paddingLeft: 25,
    lineHeight: 2,
  },
  aboutContents: {
    color: 'white',
    fontSize: 23,
    paddingTop: 20,
    marginTop: 160,
    paddingLeft: 25,
    lineHeight: 2,
  },
}));
export default function About() {
  const classes = useStyles()
  return (
    <div className={classes.root} id='about'>
      <Typography className={classes.typo} variant='h3'>
        About ME
      </Typography>
      <Grid container spacing={6} alignItems='center'>
        <Grid item md={6}>
          <div className={classes.imagContainer}>
            <img className={classes.img} src={aboutImg} alt='' />
          </div>
        </Grid>
        <Grid item md={6}>
          <div>
            <Typography className={classes.aboutContents} >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              repellendus rerum cupiditate, quam ad illo adipisci sint explicabo
              nostrum nihil ut voluptate quaerat dolore quos, assumenda
              laboriosam aliquid similique. Asperiores.
            </Typography>
            <br/>
            <br/>
            <Typography className={classes.aboutContent}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              repellendus rerum cupiditate, quam ad illo adipisci sint explicabo
              nostrum nihil ut voluptate quaerat dolore quos, assumenda
              laboriosam aliquid similique. Asperiores.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}



    // <img classname={classes.aboutImg} src={aboutImg} alt='' />




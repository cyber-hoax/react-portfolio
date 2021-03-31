import React from 'react';
import '../App.css';
import contactImg from '../assets/contact.svg'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '110px',
    height: '70vh',
    backgroundColor: '#f6f5f5',
  },

  paper: {
    textAlign: 'center',
  },
  typo: {
    textAlign: 'start',
    marginLeft: '180px',
    
  },
  imagContainer: {
    height: 500,
  },
  img: {
    paddingTop: 100,  
    width: '100%',
    paddingLeft: 70,
  },
  aboutContent: {
    fontSize: 23,
  },   
 form:{
     paddingTop:100,
     paddingLeft:30,
     maxWidth:"500px"
 }

  
}));
export default function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.root} id='contact'>
      <Typography className={classes.typo} variant='h3'>
        Contact
      </Typography>
      <Grid container spacing={6} alignItems='center'>
        <Grid item md={6}>
          <div className={classes.form}>
            <form>
              <TextField
                id='standard-basic'
                label='Standard'
                fullWidth
                variant='outlined'
                color='secondary'
              />
              <br />
              <br />
              <TextField
                id='outlined-basic'
                label='Outlined'
                variant='outlined'
                fullWidth
                color='secondary'
              />
              <br />
              <br />
              <TextField
                id='outlined-multiline-static'
                label='Multiline'
                multiline
                rows={4}
                defaultValue='Default Value'
                variant='outlined'
                fullWidth
                color='secondary'
              />
              <br/>
              <br/>
              <Button variant='contained' color='secondary' fullwidth>
                Secondary
              </Button>
            </form>
          </div>
        </Grid>

        <Grid item md={6}>
          <div className={classes.imagContainer}>
            <img className={classes.img} src={contactImg} alt='' />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

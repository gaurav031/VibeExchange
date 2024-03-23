import React, { useContext } from 'react';
import { Button, TextField, Grid, Typography, Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { SocketContext } from '../SocketContext';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  gridContainer: {
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  container: {
    width: '600px',
    margin: '35px 0',
    padding: 0,
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  },
  margin: {
    marginTop: 20,
  },
  padding: {
    padding: 20,
  },
  paper: {
    padding: '10px 20px',
    border: '2px solid black',
  },
}));


const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  const classes = useStyles();

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Container className={classes.container}>
            <Paper elevation={10} className={classes.paper}>
              <form className={classes.root} noValidate autoComplete="off">
              <Grid item xs={12} md={6} className={classes.padding}>
              
                <Typography gutterBottom variant="h6">{call.name} is calling:</Typography>
                <Button variant="contained" color="secondary" fullWidth className={classes.margin}  onClick={answerCall}>
                  answer
                </Button>

              </Grid>
              </form>
              </Paper>
              </Container>
              
            </div>
      )}
          </>
          );
};

          export default Notifications;
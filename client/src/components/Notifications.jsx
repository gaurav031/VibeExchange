import React, { useContext } from 'react';
import { Button, Typography, Container, Paper, makeStyles } from '@material-ui/core';
import { SocketContext } from '../SocketContext';

const useStyles = makeStyles((theme) => ({
  notificationContainer: {
    width: '100%',
    maxWidth: '500px',
    margin: '20px auto',
    padding: 0,
  },
  notificationPaper: {
    padding: '20px',
    border: '2px solid #b46fff',
    borderRadius: '12px',
    backgroundColor: '#2d1550',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
  },
  button: {
    marginTop: 15,
    borderRadius: '8px',
    padding: '10px 20px',
    fontWeight: 'bold',
    textTransform: 'none',
    fontSize: '1rem',
    backgroundColor: '#b46fff',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#993ce3',
    },
  },
  callInfo: {
    fontWeight: '600',
    color: '#fff',
    marginBottom: '15px',
  },
}));

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  const classes = useStyles();

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <Container className={classes.notificationContainer}>
          <Paper elevation={3} className={classes.notificationPaper}>
            <Typography variant="h6" className={classes.callInfo}>
              📞 Incoming call from {call.name}
            </Typography>
            <Button
              variant="contained"
              fullWidth
              className={classes.button}
              onClick={answerCall}
            >
              Answer Call
            </Button>
          </Paper>
        </Container>
      )}
    </>
  );
};

export default Notifications;
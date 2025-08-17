 import React, { useContext } from 'react';
import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';
import { SocketContext } from '../SocketContext';

const useStyles = makeStyles((theme) => ({
  video: {
    width: '100%',
    maxWidth: '500px',
    borderRadius: '8px',
    backgroundColor: '#000',
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  videoContainer: {
    padding: '15px',
    margin: '10px',
    borderRadius: '12px',
    backgroundColor: '#2d1550', // purple background
    border: '2px solid #b46fff',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
  },
  videoTitle: {
    color: '#b46fff',
    marginBottom: '10px',
    fontWeight: '600',
  },
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
      {stream && (
        <Paper className={classes.videoContainer} elevation={3}>
          <Grid item xs={12}>
            <Typography variant="h6" className={classes.videoTitle}>
              {name || 'You'}
            </Typography>
            <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
          </Grid>
        </Paper>
      )}
      {callAccepted && !callEnded && (
        <Paper className={classes.videoContainer} elevation={3}>
          <Grid item xs={12}>
            <Typography variant="h6" className={classes.videoTitle}>
              {call.name || 'Caller'}
            </Typography>
            <video playsInline ref={userVideo} autoPlay className={classes.video} />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;
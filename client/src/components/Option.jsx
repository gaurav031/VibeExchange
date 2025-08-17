import React, { useState, useContext } from 'react';
import { Button, TextField, Grid, Typography, Container, Paper } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { SocketContext } from '../SocketContext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    width: '100%',
    maxWidth: '800px',
    margin: '20px auto',
    padding: 0,
  },
  paper: {
    padding: '25px',
    borderRadius: '12px',
    border: '2px solid #b46fff',
    backgroundColor: '#2d1550',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
  },
  sectionTitle: {
    color: '#b46fff',
    marginBottom: '20px',
    fontWeight: '600',
  },
  textField: {
    marginBottom: '20px',
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      backgroundColor: '#fff',
    },
  },
  button: {
    borderRadius: '8px',
    padding: '10px 20px',
    fontWeight: 'bold',
    textTransform: 'none',
    fontSize: '1rem',
    marginTop: '10px',
    backgroundColor: '#b46fff',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#993ce3',
    },
  },
  gridContainer: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  gridItem: {
    padding: '15px',
  },
}));

const Option = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Paper elevation={3} className={classes.paper}>
        <form className={classes.root} noValidate autoComplete="off">
          <Grid container className={classes.gridContainer}>
            <Grid item xs={12} md={6} className={classes.gridItem}>
              <Typography variant="h6" className={classes.sectionTitle}>
                Your Information
              </Typography>
              <TextField
                label="Your Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                className={classes.textField}
              />
              <CopyToClipboard text={me}>
                <Button
                  variant="contained"
                  fullWidth
                  className={classes.button}
                  startIcon={<Assignment />}
                >
                  Copy Your ID
                </Button>
              </CopyToClipboard>
            </Grid>
            <Grid item xs={12} md={6} className={classes.gridItem}>
              <Typography variant="h6" className={classes.sectionTitle}>
                Make a Call
              </Typography>
              <TextField
                label="ID to Call"
                variant="outlined"
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
                fullWidth
                className={classes.textField}
              />
              {callAccepted && !callEnded ? (
                <Button
                  variant="contained"
                  fullWidth
                  className={classes.button}
                  startIcon={<PhoneDisabled />}
                  onClick={leaveCall}
                  style={{ backgroundColor: '#e53935' }}
                >
                  Hang Up
                </Button>
              ) : (
                <Button
                  variant="contained"
                  fullWidth
                  className={classes.button}
                  startIcon={<Phone />}
                  onClick={() => callUser(idToCall)}
                >
                  Call
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>
  );
};

export default Option;
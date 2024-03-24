import React from 'react'
import { Typography, AppBar } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import VideoPlayer from './components/VideoPlayer';
import Option from './components/Option';
import Notifications from './components/Notifications';
import { CloudUploadRounded } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#9c7945', 
    fontWeight:'bold',
    width: '600px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center">Vibes Exchange</Typography>
      </AppBar>
      <VideoPlayer />
      <Option />
      <Notifications />
    </div>
  )
}

export default App

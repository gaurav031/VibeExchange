import React from 'react';
import { Typography, AppBar, Toolbar, Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import VideoPlayer from './components/VideoPlayer';
import Option from './components/Option';
import Notifications from './components/Notifications';
import VideocamIcon from '@material-ui/icons/Videocam';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#1a0b2e',
    boxShadow: 'none',
    padding: theme.spacing(2, 0),
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
  logoIcon: {
    fontSize: '2rem',
    color: '#b46fff',
    backgroundColor: '#2d1550',
    borderRadius: '12px',
    padding: '6px',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    color: '#b46fff',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: -4,
      left: 0,
      width: '100%',
      height: 2,
      backgroundColor: '#b46fff',
    },
  },
  subtitle: {
    fontSize: '0.9rem',
    color: '#b5a8c8',
    marginTop: theme.spacing(1),
  },
  wrapper: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  contentWrapper: {
    width: '100%',
    flex: 1,
    padding: '40px 0',
    backgroundColor: '#000',
    backgroundImage: `
      radial-gradient(2px 2px at 20px 30px, #b46fff, transparent),
      radial-gradient(2px 2px at 40px 70px, #b46fff, transparent),
      radial-gradient(1.5px 1.5px at 60px 120px, #b46fff, transparent),
      radial-gradient(2px 2px at 100px 200px, #b46fff, transparent),
      radial-gradient(1.5px 1.5px at 150px 80px, #b46fff, transparent)
    `,
    backgroundRepeat: 'repeat',
    backgroundSize: '200px 200px',
    position: 'relative',
    overflow: 'hidden',
  },
  contentInner: {
    position: 'relative',
    zIndex: 2,
  },
  footer: {
    backgroundColor: '#1a0b2e',
    padding: theme.spacing(3, 0),
    marginTop: 'auto',
    textAlign: 'center',
    borderTop: '1px solid rgba(255,255,255,0.1)',
  },
  footerLogo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  footerIcon: {
    fontSize: '1.5rem',
    color: '#b46fff',
    backgroundColor: '#2d1550',
    borderRadius: '8px',
    padding: '4px',
  },
  footerTitle: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: '#b46fff',
  },
  footerText: {
    color: '#b5a8c8',
    fontSize: '0.85rem',
    marginTop: theme.spacing(0.5),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      {/* Header */}
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Box className={classes.logoContainer}>
            <VideocamIcon className={classes.logoIcon} />
            <Typography variant="h6" className={classes.title}>
              ViveExchange
            </Typography>
          </Box>
          <Typography className={classes.subtitle}>
            Experience the future of video communication with instant, secure connections
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content with starry background */}
      <div className={classes.contentWrapper}>
        <Container maxWidth="lg" className={classes.contentInner}>
          <VideoPlayer />
          <Option>
            <Notifications />
          </Option>
        </Container>
      </div>

      {/* Footer */}
      <footer className={classes.footer}>
        <Box className={classes.footerLogo}>
          <VideocamIcon className={classes.footerIcon} />
          <Typography className={classes.footerTitle}>ViveExchange</Typography>
        </Box>
        <Typography className={classes.footerText}>
          © {new Date().getFullYear()} ViveExchange — Video Calling App
        </Typography>
        <Typography className={classes.footerText}>
          Connect with your loved ones in high quality
        </Typography>
      </footer>
    </div>
  );
}

export default App;
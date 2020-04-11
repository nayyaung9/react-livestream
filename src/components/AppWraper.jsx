/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  IconButton,
  Avatar,
} from '@material-ui/core';
import ContactlessIcon from '@material-ui/icons/Contactless';
import { useSelector } from 'react-redux';
import GoogleAuth from './GoogleAuth';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: 'rgb(5, 31, 66)',
    boxShadow: 'none',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
  },
  avatar: {
    marginRight: 5,
  },
  username: {
    marginRight: 10,
    fontWeight: 'bold',
  },
}));

export default function AppWraper({ children }) {
  const classes = useStyles();
  const authUser = useSelector(state => state.auth.user);
  const isAuth = useSelector(state => state.auth.isSignedIn);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Container>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu">
              <ContactlessIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              React - Live Streaming App
            </Typography>
            {isAuth ? (
              <React.Fragment>
                <Avatar src={authUser.avatar_url} className={classes.avatar} />
                <Typography variant="body1" className={classes.username}>
                  {authUser.username}
                </Typography>
              </React.Fragment>
            ) : null}
            <GoogleAuth />
          </Toolbar>
        </Container>
      </AppBar>
      {children}
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { signIn, signOut } from '../actions';

const GoogleAuth = () => {
  const dispatch = useDispatch();
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '33074782741-k2tc68mao6ao2iok5ecgs1vccnv0oqf7.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          let auth = window.gapi.auth2.getAuthInstance();
          setIsSignedIn(auth.isSignedIn.get());
          auth.isSignedIn.listen(onAuthChange);
        });
    });
  });

  const onAuthChange = isSignedIn => {
    isSignedIn ? dispatch(signIn) : dispatch(signOut);
  };

  const onSignIn = () => this.auth.signIn();
  const onSignOut = () => this.auth.signOut();

  const renderAuthStatus = () => {
    return <Button>Sign in with Google</Button>;
  };

  return renderAuthStatus();
};

export default GoogleAuth;

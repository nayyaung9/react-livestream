/* eslint-disable react/prop-types */
import React from 'react';
import { loadCSS } from 'fg-loadcss';
import { Button, Icon } from '@material-ui/core';
import { connect } from 'react-redux';
import { signIn, signOut, getAuthUser } from '../actions';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '33074782741-k2tc68mao6ao2iok5ecgs1vccnv0oqf7.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);

          const {
            Ad: username,
            QK: avatar_url,
          } = this.auth.currentUser.get().Pt;
          const payload = {
            userId: this.auth.currentUser.get().getId(),
            username,
            avatar_url,
          };
          this.props.getAuthUser(payload);
        });
    });
    loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css')
    );
  }

  onAuthChange = isSignedIn => {
    return isSignedIn
      ? this.props.signIn(this.auth.currentUser.get().getId())
      : this.props.signOut();
  };

  onSignIn = () => this.auth.signIn();
  onSignOut = () => this.auth.signOut();

  renderAuthStatus() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn === true) {
      return (
        <Button variant="outlined" color="inherit" onClick={this.onSignOut}>
          Sign out
        </Button>
      );
    } else {
      return (
        <Button variant="outlined" color="inherit" onClick={this.onSignIn}>
          <Icon
            className="fab fa-google"
            style={{ fontSize: 18, paddingRight: 5 }}
          />{' '}
          Sign in with Google
        </Button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthStatus()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, {
  signIn,
  signOut,
  getAuthUser,
})(GoogleAuth);

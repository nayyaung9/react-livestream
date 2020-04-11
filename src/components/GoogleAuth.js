import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

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
        });
    });
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
        <Button variant="outlined" color="primary" onClick={this.onSignOut}>
          Sign out
        </Button>
      );
    } else {
      return (
        <Button variant="outlined" color="primary" onClick={this.onSignIn}>
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
})(GoogleAuth);

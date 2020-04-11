import React, { useEffect } from 'react';
import AppWraper from '../../components/AppWraper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStreams, deleteStream } from '../../actions';
import {
  Container,
  Paper,
  Grid,
  Typography,
  Button,
  Avatar,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const StreamList = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.streams);
  const authUserId = useSelector(state => state.auth.userId);
  const isAuth = useSelector(state => state.auth.isSignedIn);
  const streams = Object.values(state);

  const onItemDelete = streamId => {
    dispatch(deleteStream(streamId));
  };

  useEffect(() => {
    dispatch(fetchStreams());
  }, [dispatch]);

  const renderAuthUser = stream => {
    if (stream.userId === authUserId) {
      return (
        <React.Fragment>
          <Link
            to={`/stream/edit/${stream.id}`}
            style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              style={{
                backgroundColor: 'rgb(5, 31, 66)',
                color: '#fff',
                marginRight: 10,
              }}>
              Edit
            </Button>
          </Link>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => onItemDelete(stream.id)}>
            Delete
          </Button>
        </React.Fragment>
      );
    }
  };

  const renderStreams = () => {
    return streams.map(stream => {
      return (
        <Grid item xs={6} sm={6} key={stream.id}>
          <Paper style={{ padding: 10, height: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <Avatar src={stream.user.avatar_url} />
              <Typography variant="h6" style={{ paddingLeft: 10 }}>
                {stream.user.username}
              </Typography>
            </div>
            <Link
              to={`/stream/watch/${stream.id}`}
              style={{ textDecoration: 'none', color: '#000' }}>
              <Typography variant="h6">{stream.title}</Typography>
            </Link>
            <Typography component="p">{stream.description}</Typography>
            <Link
              to={`/stream/watch/${stream.id}`}
              style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                style={{
                  backgroundColor: 'rgb(5, 31, 66)',
                  color: '#fff',
                  marginRight: 10,
                }}>
                Watch Stream
              </Button>
            </Link>
            {renderAuthUser(stream)}
          </Paper>
        </Grid>
      );
    });
  };

  const renderButton = () => {
    if (isAuth) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link
            to="/stream/new"
            style={{
              textDecoration: 'none',
            }}>
            <Button
              variant="contained"
              style={{ backgroundColor: 'rgb(5, 31, 66)', color: '#fff' }}>
              Create Stream
            </Button>
          </Link>
        </div>
      );
    }
  };

  return (
    <AppWraper>
      <Container style={{ marginTop: 40 }}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          style={{ marginBottom: 10 }}>
          <Typography variant="h4">Current Streaming</Typography>
          {renderButton()}
        </Grid>
        <Grid container spacing={3} direction="row" alignItems="stretch">
          {renderStreams()}
        </Grid>
      </Container>
    </AppWraper>
  );
};

export default StreamList;

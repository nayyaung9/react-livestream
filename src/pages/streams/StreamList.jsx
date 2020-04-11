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
        <div>
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
        </div>
      );
    }
  };

  const renderStreams = () => {
    return streams.map(stream => {
      return (
        <Paper key={stream.id} style={{ padding: 10, boxShadow: 'none' }}>
          <Avatar src={stream.user.avatar_url} />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
              <Link
                to={`/stream/watch/${stream.id}`}
                style={{ textDecoration: 'none', color: '#000' }}>
                <Typography variant="h5" component="h3">
                  {stream.title}
                </Typography>
              </Link>
              <Typography component="p">{stream.description}</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              {renderAuthUser(stream)}
            </Grid>
          </Grid>
        </Paper>
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
          alignItems="center">
          <Typography variant="h4">Current Streaming</Typography>
          {renderButton()}
        </Grid>
        {renderStreams()}
      </Container>
    </AppWraper>
  );
};

export default StreamList;

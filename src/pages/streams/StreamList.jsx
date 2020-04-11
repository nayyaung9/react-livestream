import React, { useEffect } from 'react';
import AppWraper from '../../components/AppWraper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Paper, Grid, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const StreamList = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.streams);
  const authUserId = useSelector(state => state.auth.userId);
  const streams = Object.values(state);

  useEffect(() => {
    dispatch(fetchStreams());
  }, [dispatch]);

  const renderAuthUser = stream => {
    if (stream.userId === authUserId) {
      return (
        <div>
          <Link to={`/streams/edit/${stream.id}`}>
            <Button
              variant="contained"
              style={{
                backgroundColor: 'rgb(5, 31, 66)',
                color: '#fff',
                marginTop: 10,
              }}>
              Edit
            </Button>
          </Link>
          <Button variant="contained" color="secondary">
            Delete
          </Button>
        </div>
      );
    }
  };

  const renderStreams = () => {
    return streams.map(stream => {
      return (
        <Paper key={stream.id}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
              <Typography variant="h5" component="h3">
                {stream.title}
              </Typography>
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

  return <AppWraper>{renderStreams()}</AppWraper>;
};

export default StreamList;

/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import AppWraper from '../../components/AppWraper';
import { Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleStream } from '../../actions';

const StreamEdit = props => {
  const dispatch = useDispatch();
  const stream = useSelector(state => state.streams[props.match.params.id]);

  useEffect(() => {
    const { id } = props.match.params;
    dispatch(fetchSingleStream(id));
  }, [dispatch, props.match.params]);

  return (
    <AppWraper>
      <Container style={{ marginTop: 50 }}>
        {!stream ? 'Loading' : stream.title}
      </Container>
    </AppWraper>
  );
};

export default StreamEdit;

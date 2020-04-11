/* eslint-disable react/prop-types */
import React from 'react';
import AppWraper from '../../components/AppWraper';
import { Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from '../../components/stream/StreamForm';

const StreamCreate = props => {
  const dispatch = useDispatch();

  const onFormSubmit = formValues => {
    dispatch(createStream(formValues));
  };

  return (
    <AppWraper>
      <Container style={{ marginTop: 50 }}>
        <StreamForm onSubmit={onFormSubmit} />
      </Container>
    </AppWraper>
  );
};

export default StreamCreate;

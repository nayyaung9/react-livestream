/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import AppWraper from '../../components/AppWraper';
import { Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleStream, editStream } from '../../actions';
import StreamForm from '../../components/stream/StreamForm';
import _ from 'lodash';

const StreamEdit = props => {
  const dispatch = useDispatch();
  const stream = useSelector(state => state.streams[props.match.params.id]);

  const onFormSubmit = formValues => {
    console.log(formValues);
    dispatch(editStream(props.match.params.id, formValues));
  };

  useEffect(() => {
    const { id } = props.match.params;
    dispatch(fetchSingleStream(id));
  }, [dispatch, props.match.params]);

  return (
    <AppWraper>
      <Container style={{ marginTop: 50 }}>
        {!stream ? 'Loading' : stream.title}
        <StreamForm
          initialValues={_.pick(stream, 'title', 'description')}
          onSubmit={onFormSubmit}
        />
      </Container>
    </AppWraper>
  );
};

export default StreamEdit;

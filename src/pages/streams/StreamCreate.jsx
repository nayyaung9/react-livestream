/* eslint-disable react/prop-types */
import React from 'react';
import AppWraper from '../../components/AppWraper';
import { Field, reduxForm } from 'redux-form';
import {
  Container,
  Input,
  InputLabel,
  Typography,
  FormControl,
  Button,
} from '@material-ui/core';

const StreamCreate = props => {
  const { handleSubmit } = props;

  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          style={{ color: 'red' }}>
          {error}
        </Typography>
      );
    }
  };

  const renderInput = ({ input, label, meta }) => {
    return (
      <>
        <FormControl fullWidth={true} margin="normal">
          <InputLabel>{label}</InputLabel>
          <Input {...input} />
          {renderError(meta)}
        </FormControl>
      </>
    );
  };

  const onFormSubmit = formValues => {
    console.log(formValues);
  };

  return (
    <AppWraper>
      <Container style={{ marginTop: 50 }}>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <Field name="title" component={renderInput} label="Title" />
          <Field
            name="description"
            component={renderInput}
            label="Description"
          />
          <Button
            variant="contained"
            style={{
              backgroundColor: 'rgb(5, 31, 66)',
              color: '#fff',
              marginTop: 10,
            }}
            type="submit">
            Create
          </Button>
        </form>
      </Container>
    </AppWraper>
  );
};

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

export default reduxForm({
  form: 'streamCreate',
  validate,
})(StreamCreate);

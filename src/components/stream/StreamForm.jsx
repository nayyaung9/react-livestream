/* eslint-disable react/prop-types */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  Input,
  InputLabel,
  Typography,
  FormControl,
  Button,
} from '@material-ui/core';

const StreamForm = props => {
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

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <Field name="title" component={renderInput} label="Title" />
      <Field name="description" component={renderInput} label="Description" />
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
  form: 'streamForm',
  validate,
})(StreamForm);

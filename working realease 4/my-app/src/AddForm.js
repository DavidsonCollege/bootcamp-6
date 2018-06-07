import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form'

const AddForm = props => {
  const {handleSubmit} = props;
  return (
    <form onSubmit={handleSubmit}>
    <div>
      <label> Add a new todo: </label>
      <div>
        <Field name='description' component = 'input' type='text' placeholder="description" />
      </div>
    </div>
    <button type="submit">Submit</button>
  </form>
  );
}



export default reduxForm({
  form: 'add'
}) (AddForm)

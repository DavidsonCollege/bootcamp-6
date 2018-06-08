import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'


let Form = props => {
  const {handleSubmit, pristine, reset, submitting} = props

  return(
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="description" component="input" type="text" value="submit" placeholder="Write your description"/>
        <button type="submit" disabled={pristine || submitting}>ADD A TODO</button>
      </div>
    </form>
  )
}

Form = reduxForm({
  form: "adding",
  fields: ["description"]
})(Form)

export default Form

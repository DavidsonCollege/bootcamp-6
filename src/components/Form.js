import React, { Component } from 'react';
import {CSVLink, CSVDownload} from 'react-csv';
import { connect } from 'react-redux'
// import { onDeleteTodo,deleteAll,onChange,onAddToDo,
//   markAsComplete,markAsUncomplete, changeDate, setDate, setOrdering, setOrderingByDate,
//  setColor, setStar, undo, loadTodos} from '../actions'
import { Field, reduxForm } from 'redux-form'


const Form = props => {
  const {handleSubmit, pristine, reset, submitting} = props

  return(
    <form onSubmit={handleSubmit(this.onSubmit)}>
      <div>
        <Field name="description" component="input" type="text" placeholder="Write your description"/>
        <button type="submit" disabled={pristine || submitting}>ADD A TODO</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: "adding",
  fields: ["description"]
})(Form)

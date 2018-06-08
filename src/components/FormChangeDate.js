import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { onDeleteTodo,deleteAll,onChange,onAddToDo,
//   markAsComplete,markAsUncomplete, changeDate, setDate, setOrdering, setOrderingByDate,
//  setColor, setStar, undo, loadTodos} from '../actions'
import { Field, reduxForm } from 'redux-form'


let FormChangeDate = props => {
  const {handleSubmit, pristine, reset, submitting} = props

  return(
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="dateDue" component="input" type="datetime-local" value="submit" placeholder="Write your description"/>
        <button type="submit" disabled={pristine || submitting}>SET DUE DATE</button>
      </div>
    </form>
  )
}

FormChangeDate = reduxForm({
  form: "changingdate",
  fields: ["dateDue"]
})(FormChangeDate)

export default FormChangeDate

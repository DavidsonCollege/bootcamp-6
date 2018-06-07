import React from 'react'
import { Field, reduxForm } from 'redux-form'

let newTaskForm = (props) => {
  const { handleSubmit } = props
  return (
    <div>
    <form onSubmit={handleSubmit}>/*
     form body*/
     <div>
       <label htmlFor="Description">Description: </label>
       <Field name="description" component="input" type="text" />
     </div>

     <div>
       <label htmlFor="Date">Due Date:</label>
       <Field name="date" component="input" type="date" />
     </div>

   </form>
 </div>)
}

newTaskForm = reduxForm({
  // a unique name for the form
  form: 'New Task'
})(newTaskForm)

export default newTaskForm

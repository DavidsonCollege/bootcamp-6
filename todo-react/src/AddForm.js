import React from 'react'
import {Field, reduxForm} from 'redux-form'




const AddForm = props => {
  // const {handleSubmit} = props;
  return (
  //   <form onSubmit={handleSubmit}>
  //   <div>
  //     <label> Description </label>
  //     <div>
  //       <Field name='description' component = 'input' type='text' />
  //     </div>
  //   </div>
  //   <button type="submit">Submit</button>
  // </form>
  );
}



export default reduxForm({
  form: 'add'
}) (AddForm)

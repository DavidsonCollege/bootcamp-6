import React from 'react'
import {Field, reduxForm} from 'redux-form'


let TaskForm = props => {
    const {handleSubmit} = props;
    return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Description">Description: </label>
                    <Field name="description" component="input" type="text"/>
                </div>

                <div>
                    <label htmlFor="Date">Due Date:</label>
                    <Field name="date" component="input" type="date"/>
                </div>

            </form>)
};

TaskForm = reduxForm({
    // a unique name for the form
    form: 'newTask'
})(TaskForm);

export default TaskForm

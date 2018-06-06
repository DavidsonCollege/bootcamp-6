import React from 'react';
import {addTodo, changeInput, changeDateInput, changeOrder, clearTodo, Orderings,
  Colors, changeColor, deleteTodo, changeDate, completeTodo } from '../actions';
class CompletedList extends React.Component{

  render() {
    return (
      <div>
        <h3> Completed Todos </h3>
        <ol>
          {this.props.todos.filter((item) => item.completed).map((todo) => {
            return <li key={todo._guid}>{todo.description} Completed
      
            <br></br>
            <button onClick={() => this.props.dispatch(deleteTodo(todo._guid))}
        >Remove</button>

            </li>
          })}
        </ol>

      </div>
    )
  }

}
export default CompletedList;

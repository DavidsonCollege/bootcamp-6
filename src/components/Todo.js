import React, { Component } from 'react';
import {CSVLink, CSVDownload} from 'react-csv';
import { connect } from 'react-redux'
import { onDeleteTodo,deleteAll,onChange,onAddToDo,
  markAsComplete,markAsUncomplete, changeDate, setDate, setOrdering, setOrderingByDate,
 setColor, setStar, undo, loadTodos} from '../actions'
import { Field, reduxForm } from 'redux-form';
import Form from './Form'

class Todos extends Component {

  reorder(array){
    let temp = [...array];
    temp.sort((a, b) => a.description.localeCompare(b.description));
    return temp;
  }

  reorderDate(array){
    let temp = [...array];
    temp.sort((a, b) => a.dateDue.localeCompare(b.dateDue));
    return temp;
  }

  render(){
    const state = this.props.state
    let completed = state.todos.filter(function (todo) {return todo.isComplete === true});
    let uncompleted = state.todos.filter(function (todo) {return todo.isComplete === false});
    let starStyle = {
      color: "yellow",
      fontSize: "36px",
      background:"white"
    }
    if(state.ordering==="alphabetically"){
      completed = this.reorder(completed);
      uncompleted = this.reorder(uncompleted);
    } else if(state.ordering==="date"){
      completed = this.reorderDate(completed);
      uncompleted = this.reorderDate(uncompleted);
    }
    // this.props.todos.map((todo) => {
    //   if (todo.isComplete) completed.push(todo);
    //   else uncompleted.push(todo);
    // });

    return (
        <div className="todos-container">
        <div className="Ordering options">
          <button onClick={() => this.props.dispatch(setOrdering)}>alphabetically</button>
          <button onClick={() => this.props.dispatch(setOrderingByDate)}>by date</button>
        </div>
        <div className="completed-container">
        <h3>Completed Tasks</h3>
        {completed.map((todo, i) => {
          return(
            <div key={todo._id}>
              <div style={{color:todo.color}}>{todo.description}</div>
              {todo.dateDue ? (<div>{todo.dateDue}</div>) : (
                <div>
                  <div>Due date not set</div>
                    <input id="date" type="datetime-local" onChange={this.props.changeDate}/>
                    <button onClick={(event)=>this.props.dispatch(setDate(event, todo._id))}>Set Due Date</button>
                </div>

              )}
              <button onClick={()=>this.props.dispatch(onDeleteTodo(todo._id))}>Delete</button>
              <button onClick={()=>this.props.dispatch(markAsUncomplete(todo._id))}>Mark as uncompleted</button>
              <select onChange={(event)=>this.props.dispatch(setColor(event, todo._id))}>
                <option value="black">black</option>
                <option value="red">red</option>
                <option value="yellow">yellow</option>
                <option value="blue">blue</option>
                <option value="pink">pink</option>
                <option value="aqua">aqua</option>
                <option value="indigo">indigo</option>
              </select>
              <br></br>
                {todo.star ? <h style={starStyle} onClick={()=>this.props.setStar(todo._id)}>&#9733;</h> :
                <h style={starStyle} onClick={()=>this.props.dispatch(setStar(todo._id))}>&#9734;</h> }
            </div>);
        })
      }
      </div>
      <div className="uncompleted-container">
      <h3>Uncompleted Tasks</h3>
          {
            uncompleted.map((todo, i) => {
            return(
              <div key={todo._id}>
                <div style={{color:todo.color}}>{todo.description}</div>
                {todo.dateDue ? (<div>{todo.dateDue}</div>) : (
                  <div>
                    <div>Due date not set</div>
                      <input id="date" type="datetime-local" onChange={(event) => this.props.dispatch(changeDate(event))}/>
                      <button onClick={(event)=>this.props.dispatch(setDate(event, todo._id))}>Set Due Date</button>
                  </div>
                )}
                <button onClick={()=>this.props.dispatch(onDeleteTodo(todo._id))}>Delete</button>
                <button onClick={()=>this.props.dispatch(markAsComplete(todo._id))}>Mark as completed</button>

                <select onChange={(event)=>this.props.dispatch(setColor(event, todo._id))}>
                  <option value="black">black</option>
                  <option value="red">red</option>
                  <option value="yellow">yellow</option>
                  <option value="blue">blue</option>
                  <option value="pink">pink</option>
                  <option value="aqua">aqua</option>
                  <option value="indigo">indigo</option>
                </select>
                <br></br>
                  {todo.star ? <h style={starStyle} onClick={()=>this.props.setStar(todo._id)}>&#9733;</h> :
                  <h style={starStyle} onClick={()=>this.props.dispatch(setStar(todo._id))}>&#9734;</h> }
              </div>);
          })
        }
      </div>
      <div>
        <form onSubmit={(event)=> this.props.dispatch(onAddToDo(event))}>
          Add a todo: <input type="text" name="description" onChange={(event)=>this.props.dispatch(onChange(event))}/>
          <input type="submit" value="submit"/>
        </form>
      </div>
      <div>
          <button onClick={()=>this.props.dispatch(deleteAll)}>Delete all todos</button>
          <CSVLink data={state.todos}>Download</CSVLink>
          <br></br>
          <button onClick={()=> this.props.dispatch(undo)}>UNDO</button>
          <br></br>
          <button onClick={() => this.props.dispatch(loadTodos())}>LOAD TODOS</button>

      </div>
      <div>
      <Form state={this.props.state} dispatch={this.props.dispatch}
      onSubmit={(values) => {this.props.dispatch(onAddToDo(values.description))}}/>

      </div>
      </div>

    );
  }
}
//
// Todos = reduxForm({
//   form: 'addform'
// })(Todos)

export default Todos;

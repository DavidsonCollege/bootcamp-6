import React, { Component } from 'react';
import AddForm from './AddForm';

import {onAddToDo,
onDeleteTodo,
deleteAll,
markAsUncomplete,
markAsComplete,
setDate,
orderAlpha,
setOrderingByDate,
setColor,
setStar,
onChange,
undo,
loadTodos,


} from './actions'


class Todos extends Component {
  //
  // submit = (values) => {
  //   return this.props.dispatch(onAddToDo(values));
  // }

  render(){
    let completed = this.props.todos.filter(function (todo) {return todo.isComplete === true});
    let uncompleted = this.props.todos.filter(function (todo) {return todo.isComplete === false});
    let starStyle = {
      color: "yellow",
      fontSize: "36px",
      background:"white"
    }
    if(this.props.ordering==="alphabetically"){
      completed = this.reorder(completed);
      uncompleted = this.reorder(uncompleted);
    } else if(this.props.ordering==="date"){
      completed = this.reorderDate(completed);
      uncompleted = this.reorderDate(uncompleted);
    }

    return (

        <div className="todos-container">

        <div className="undo button">
          <button onClick={()=> this.props.dispatch(undo())}>Undo </button>

        </div>

        <div className="load button">
          <button onClick={()=>this.props.dispatch(loadTodos())}>Load </button>

        </div>

        <div className="Ordering options">
          <button onClick={() => this.props.dispatch(orderAlpha())}>alphabetically</button>
          <button onClick={() => this.props.dispatch(setOrderingByDate())}>by date</button>
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
                    <input id="date" type="datetime-local"/>
                    <button onClick={(event)=>{
                      event.preventDefault();
                      this.props.dispatch(setDate(event.target.date.value, todo._id))}
                    }>Set Due Date</button>
                </div>

              )}
              <button onClick={(event)=>{
                event.preventDefault();
                this.props.dispatch(onDeleteTodo(todo._id))}}>Delete</button>


              <button onClick={()=>this.props.dispatch(markAsUncomplete(todo._id))}>Mark as uncompleted</button>
              <select onChange={(event)=>{
                event.preventDefault();
                this.props.dispatch(setColor(todo._id, event.target.value))}}>
                <option value="black">black</option>
                <option value="red">red</option>
                <option value="yellow">yellow</option>
                <option value="blue">blue</option>
                <option value="pink">pink</option>
                <option value="aqua">aqua</option>
                <option value="indigo">indigo</option>
              </select>
              <br></br>
                {todo.star ? <h style={starStyle} onClick={()=>this.props.dispatch(setStar(todo._id))}>&#9733;</h> :
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
                  <div>
                    <p>Due date: {todo.dateDue}</p>
                    <form onSubmit={(event) => {
                      event.preventDefault();
                      this.props.dispatch(setDate(todo._id, event.target.date.value))}}>
                    <input type="date" name="date"/>
                    <input type="submit" value="Set due date"/>
                    </form>
                  </div>

                <button onClick={(event)=>{
                  event.preventDefault();
                  this.props.dispatch(onDeleteTodo(todo._id))}}>
                  Delete</button>
                <button onClick={()=>this.props.dispatch(markAsComplete(todo._id))}>Mark as completed</button>

                <select onChange={(event)=>{
                  event.preventDefault();
                  this.props.dispatch(setColor(todo._id, event.target.value))}
                }>
                  <option value="black">black</option>
                  <option value="red">red</option>
                  <option value="yellow">yellow</option>
                  <option value="blue">blue</option>
                  <option value="pink">pink</option>
                  <option value="aqua">aqua</option>
                  <option value="indigo">indigo</option>
                </select>
                <br></br>
                  {todo.star ? <h1 style={starStyle} onClick={()=>this.props.dispatch(setStar(todo._id))}>&#9733;</h1> :
                  <h1 style={starStyle} onClick={()=>this.props.dispatch(setStar(todo._id))}>&#9734;</h1> }
              </div>);
          })
        }
      </div>
      // <div>
      // <AddForm onSubmit={values => this.submit(values)}/>
      // </div>
      <div>
        <form onSubmit={(event)=>{
          event.preventDefault();
          this.props.dispatch(onAddToDo(this.props.input))}}>
          Add a todo: <input type="text"  value={this.props.input}
          onChange={(event) => {
            event.preventDefault();
            this.props.dispatch(onChange(event.target.value));
          }
        } />
          <input type="submit" value="submit"/>
        </form>
      </div>
      <div>
          <button onClick={() => this.props.dispatch(deleteAll())}>Delete all todos</button>
      </div>
      </div>
    );
  }
}

export default Todos;

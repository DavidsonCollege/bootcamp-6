import React, { Component } from 'react';
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

import AddForm from './AddForm';


class Todos extends Component {


  render(){
    let completed = this.props.reducer.todos.filter(function (todo) {return todo.isComplete === true});
    let uncompleted = this.props.reducer.todos.filter(function (todo) {return todo.isComplete === false});
    let starStyle = {
      color: "yellow",
      fontSize: "36px",
      background:"white"
    }
    if(this.props.reducer.ordering==="alphabetically"){
      completed = this.reorder(completed);
      uncompleted = this.reorder(uncompleted);
    } else if(this.props.reducer.ordering==="date"){
      completed = this.reorderDate(completed);
      uncompleted = this.reorderDate(uncompleted);
    }

    return (

        <div className="todos-container">

        <div className="undo button">
          <button onClick={()=> this.props.reducer.dispatch(undo())}>Undo </button>

        </div>

        <div className="load button">
          <button onClick={()=>this.props.reducer.dispatch(loadTodos())}>Load </button>

        </div>

        <div className="Ordering options">
          <button onClick={() => this.props.reducer.dispatch(orderAlpha())}>alphabetically</button>
          <button onClick={() => this.props.reducer.dispatch(setOrderingByDate())}>by date</button>
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
                      this.props.reducer.dispatch(setDate(event.target.date.value, todo._id))}
                    }>Set Due Date</button>
                </div>

              )}
              <button onClick={(event)=>{
                event.preventDefault();
                this.props.reducer.dispatch(onDeleteTodo(todo._id))}}>Delete</button>


              <button onClick={()=>this.props.reducer.dispatch(markAsUncomplete(todo._id))}>Mark as uncompleted</button>
              <select onChange={(event)=>{
                event.preventDefault();
                this.props.reducer.dispatch(setColor(todo._id, event.target.value))}}>
                <option value="black">black</option>
                <option value="red">red</option>
                <option value="yellow">yellow</option>
                <option value="blue">blue</option>
                <option value="pink">pink</option>
                <option value="aqua">aqua</option>
                <option value="indigo">indigo</option>
              </select>
              <br></br>
                {todo.star ? <h style={starStyle} onClick={()=>this.props.reducer.dispatch(setStar(todo._id))}>&#9733;</h> :
                <h style={starStyle} onClick={()=>this.props.reducer.dispatch(setStar(todo._id))}>&#9734;</h> }
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
                      this.props.reducer.dispatch(setDate(todo._id, event.target.date.value))}}>
                    <input type="date" name="date"/>
                    <input type="submit" value="Set due date"/>
                    </form>
                  </div>

                <button onClick={(event)=>{
                  event.preventDefault();
                  this.props.reducer.dispatch(onDeleteTodo(todo._id))}}>
                  Delete</button>
                <button onClick={()=>this.props.reducer.dispatch(markAsComplete(todo._id))}>Mark as completed</button>

                <select onChange={(event)=>{
                  event.preventDefault();
                  this.props.reducer.dispatch(setColor(todo._id, event.target.value))}
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
                  {todo.star ? <h1 style={starStyle} onClick={()=>this.props.reducer.dispatch(setStar(todo._id))}>&#9733;</h1> :
                  <h1 style={starStyle} onClick={()=>this.props.reducer.dispatch(setStar(todo._id))}>&#9734;</h1> }
              </div>);
          })
        }
      </div>

      <div>
      <AddForm onSubmit={values => {this.props.dispatch(onAddToDo(values.description))}}/>
      </div>

      <div>
          <button onClick={() => this.props.reducer.dispatch(deleteAll())}>Delete all todos</button>
      </div>
      </div>
    );
  }
}

export default Todos;
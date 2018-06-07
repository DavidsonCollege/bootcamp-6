import React, { Component } from 'react';
import{connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList.js';
import CompletedList from './components/CompletedList.js';
import {CSVLink} from 'react-csv';
import {undo, loadTodos} from './actions'


class App extends Component {

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The Greatest Todo List</h1>
        </header>
        <button onClick={() => this.props.dispatch(loadTodos())}>LOAD TODOS</button>

        <p className="App-intro">

          <TodoList {...this.props }/>

          <CompletedList {...this.props }/>

          <br></br>
          <CSVLink data={this.props.todos} headers={this.props.headers}
          filename={"my-file.csv"}
          className="btn btn-primary"
          target="_blank">
          Export Me
          </CSVLink>
          <br></br>
          <button onClick={() =>this.props.dispatch(undo())}>Undo</button>
        </p>

      </div>
    );
  }
}

export default connect(state => state)(App);

import React, {Component} from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList.js';
import CompletedList from './components/CompletedList.js';
import {CSVLink} from 'react-csv';
import {undo, loadTodos} from './actions'

import TaskForm from './components/TaskForm'

class App extends Component {

    render() {
        console.log(this.props);
        return (
            <div className="App">

                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">The Greatest Todo List</h1>
                </header>
                <TaskForm onSubmit={(values) => {console.log(values)}}/>
                <button onClick={() => this.props.reducer.dispatch(loadTodos())}>LOAD TODOS</button>

                <p className="App-intro">

                    <TodoList {...this.props.reducer}/>

                    <CompletedList {...this.props.reducer}/>

                    <br></br>
                    <CSVLink data={this.props.reducer.todos} headers={this.props.reducer.headers}
                             filename={"my-file.csv"}
                             className="btn btn-primary"
                             target="_blank">
                        Export Me
                    </CSVLink>
                    <br></br>
                    <button onClick={() => this.props.reducer.dispatch(undo())}>Undo</button>
                </p>

            </div>
        );
    }
}

export default connect(state => state)(App);

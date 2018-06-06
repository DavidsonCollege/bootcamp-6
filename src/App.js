import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo'
import { createStore } from 'redux'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props){
    super(props);
    let currentTime = new Date(1997,10,24,1,1,1,1);
    this.state = {
      todos: [{description: 'default', dateDue: currentTime.toString(), isComplete: true, _id: 0, color: "black", star: false},
      {description: 'default2', dateDue: null, isComplete: false, _id: 1, color: "black", star: false}],
      input: "",
      date: Date.now(),
      counter: 2,
      ordering: "default",
    };
  }

  render() {
    return (
      <div>
      <div>{console.log(this.props.input)}</div>
        <Todo state={this.props} dispatch={this.props.dispatch}/>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
 console.log("EXPORTING "+this.props);
 return state}

export default connect(mapStateToProps)(App)

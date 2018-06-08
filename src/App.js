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
  }

  render() {
    return (
      <div>
      <div>{console.log(this.props.myReducer)}</div>
        <Todo state={this.props.myReducer} dispatch={this.props.dispatch}/>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
 return state}

export default connect(mapStateToProps)(App)

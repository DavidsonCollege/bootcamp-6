
import {connect} from 'react-redux'
import React, { Component } from 'react';
import './App.css';
import Todo from './Todo'


class App extends Component {

  render() {
    console.log(this.props);
    return (
      <div>
        <Todo {...this.props}/>
      </div>
    );
  }
}


export default connect (state => state)(App);

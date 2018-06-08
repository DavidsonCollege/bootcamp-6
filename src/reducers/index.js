//import { combineReducers } from 'redux'
import { connect } from 'react-redux'
import {reducer as form } from "redux-form";
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';

let currentTime = new Date(1997,10,24,1,1,1,1);
let defaultState = {
  todos: [{description: 'default', dateDue: currentTime.toString(), isComplete: true, _id: 0, color: "black", star: false},
  {description: 'default2', dateDue: null, isComplete: false, _id: 1, color: "black", star: false}],
  input: "",
  date: Date.now(),
  counter: 2,
  ordering: "default",
  history: []
};

function myReducer(prevState = defaultState, action){
  let state = JSON.parse(JSON.stringify(prevState));
  console.log("HERE"+state.todos[0].description);
  // state.history.push(prevState);
  switch (action.type) {
    case "DELETE_TODO":
      let id = action.id;
      let index = state.todos.findIndex((todo) => todo._id===id);
      state.todos.splice(index, 1);
      console.log(state);
      return state;
    case "DELETE_ALL":
      let todos = [];
      return {...state, todos}
    case "INPUT_BOX_TODO":
      action.event.preventDefault();
      let inputValue = action.event.target.value;
      return {...state, input:inputValue};
    case "ADD_A_TODO":
      // console.log(action);
      // console.log("+++++++");
      // action.event.preventDefault();
      let newToDo = {description: action.description, dateDue: null, isComplete: false, _id: state.counter, color: "black", star: false};
      let newTodos = [...state.todos];
      newTodos.push(newToDo);
      return {...state, todos:newTodos, counter:state.counter+1};
    case 'MARK_COMPLETE':
      todos = [...state.todos];
      todos.find((todo)=>todo._id===action.id).isComplete = true;
      return {...state, todos:todos};
    case 'MARK_UNCOMPLETE':
      todos = [...state.todos];
      todos.find((todo)=>todo._id===action.id).isComplete = false;
      return {...state, todos:todos};
    case 'CHANGE_DATE':
      // action.event.preventDefault();
      console.log("HERE.");
      console.log(action);
      todos = [...state.todos];
      todos.find((todo)=>todo._id===action.id).dateDue = action.dateDue;
      return {...state, todos};
    case 'SET_DATE':
      action.event.preventDefault();
      todos = [...state.todos];
      todos.find((todo)=>todo._id===action.id).dateDue = state.date;
      return {...state, todos};
    case 'SET_ORDERING_ALPHABETICALLY':
      return {...state, ordering: "alphabetically"};
    case 'SET_ORDERING_BY_DATE':
      return {...state, ordering: "date"};
    case 'SET_COLOR':
      action.event.preventDefault();
      todos = [...state.todos];
      todos.find((todo)=>todo._id===action.id).color = action.event.target.value;
      return {...state, todos};
    case 'SET_STAR':
      todos = [...state.todos];
      let todo = todos.find((todo)=>todo._id===action.id);
      todo.star = (todo.star) ? false : true;
      return {...state, todos};
    case 'UNDO':
      let history = [...state.history];
      history.pop();
      return history.pop();
    case 'LOAD_TODOS':
      state.todos = action.tempTodos;
      return state;
    default:
      return prevState;
  }
}

const reducers = combineReducers({
  myReducer,
  form
});

export default createStore(reducers, applyMiddleware(thunk))

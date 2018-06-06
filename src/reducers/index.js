//import { combineReducers } from 'redux'
import { connect } from 'react-redux'

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

function reducer(prevState = defaultState, action){
  let state = JSON.parse(JSON.stringify(prevState));
  console.log("HERE"+state.todos[0].description);
  state.history.push(prevState);
  switch (action.type) {
    case "DELETE_TODO":
      let id = action.id;
      let index = state.todos.findIndex((todo) => todo._id===id);
      state.todos.splice(index, 1);
      console.log(state);
      return state;
      break;
    case "DELETE_ALL":
      let todos = [];
      return {...state, todos}
      break;
    case "INPUT_BOX_TODO":
      action.event.preventDefault();
      let inputValue = action.event.target.value;
      return {...state, input:inputValue};
      break;
    case "ADD_A_TODO":
      action.event.preventDefault();
      let newToDo = {description: state.input, dateDue: null, isComplete: false, _id: state.counter, color: "black", star: false};
      let newTodos = [...state.todos];
      newTodos.push(newToDo);
      return {...state, todos:newTodos, counter:state.counter+1};
      break;
    case 'MARK_COMPLETE':
      todos = [...state.todos];
      todos.find((todo)=>todo._id===action.id).isComplete = true;
      return {...state, todos:todos};
      break;
    case 'MARK_UNCOMPLETE':
      todos = [...state.todos];
      todos.find((todo)=>todo._id===action.id).isComplete = false;
      return {...state, todos:todos};
      break;
    case 'CHANGE_DATE':
      action.event.preventDefault();
      return {...state, date: action.event.target.value};
      break;
    case 'SET_DATE':
      action.event.preventDefault();
      todos = [...state.todos];
      todos.find((todo)=>todo._id===action.id).dateDue = state.date;
      return {...state, todos:todos};
      break;
    case 'SET_ORDERING_ALPHABETICALLY':
      return {...state, ordering: "alphabetically"};
      break;
    case 'SET_ORDERING_BY_DATE':
      return {...state, ordering: "date"};
      break;
    case 'SET_COLOR':
      action.event.preventDefault();
      todos = [...state.todos];
      todos.find((todo)=>todo._id===action.id).color = action.event.target.value;
      return {...state, todos:todos};
      break;
    case 'SET_STAR':
      todos = [...state.todos];
      let todo = todos.find((todo)=>todo._id===action.id);
      todo.star = (todo.star) ? false : true;
      return {...state, todos:todos};
      break;
    case 'UNDO':
      let history = [...state.history];
      history.pop();
      return history.pop();
      break;
    default:
      return prevState;
  }
}

export default reducer

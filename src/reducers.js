import {combineReducers} from 'redux'
import {CHANGE_ORDER, Orderings,CLEAR_TODO, CHANGE_DATE_INPUT, CHANGE_INPUT, ADD_TODO, COMPLETE_TODO, DELETE_TODO,
CHANGE_COLOR, CHANGE_DATE, UNDO} from './actions';

var defaultState ={
  history:[],
  todos: [],
  input: "",
  dateInput: null,
  headers: [
  {label: 'Description', key: 'description'},
  {label: 'Due Date', key: 'dueDate'}
  ]

  }

function reducer(oldState = defaultState, action) {
  let state = JSON.parse(JSON.stringify(oldState))
  state.history.push(oldState);

  switch(action.type) {
    case UNDO:
      state.history.pop();
      return state.history.pop();

    case CHANGE_ORDER:
      switch (action.order){
        case Orderings.ALPHABETICAL:
          state.todos.sort((a,b) => a.description.localeCompare(b.description) );
          return state;
        case Orderings.DUEDATE:
          state.todos.sort((a,b) => {
            if (a.dueDate === b.dueDate){
              return 0;
            }
            return a.dueDate < b.dueDate ? -1:1;
            })
            return state;
        default: return state;
      }

    case CLEAR_TODO:
      state.todos = [];
      return state;

    case CHANGE_DATE_INPUT:
      state.dateInput = action.date;
      return state;

    case CHANGE_INPUT:
      state.input = action.text;
      return state;

    case ADD_TODO:
      state.todos.push(action.todo)
      return state;
    case COMPLETE_TODO:
      var currItem = state.todos.find((todo) => {
        return todo._guid === action._guid
      });
      currItem.completed = true;
      return state;

    case DELETE_TODO:
      var index = state.todos.findIndex((todo) => {
        return todo._guid === action._guid;
      });

      state.todos.splice(index,1);
      return state;

    case CHANGE_COLOR:
      var currItem = state.todos.find((todo) => {
        return todo._guid === action._guid
      });
      currItem.color = action.color;
      return state;

    case CHANGE_DATE:
      var currItem = state.todos.find((todo) => {
        return todo._guid === action._guid;
      });
      currItem.date = action.date;
      return state;

    default:
      return state;
  }


}

export default reducer;

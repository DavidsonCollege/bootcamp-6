import {
  ADD_TODO,
  DELETE_TODO,
  DELETE_ALL,
  UNCOMPLETED,
  COMPLETED,
  SET_DATE,
  ORDER_ALPHA,
  ORDER_DATE,
  COLOR_SET,
  STAR,
  ON_CHANGE,
  UNDO,
  LOAD_TODOS
} from './actions'

const initialState = {
 todos: [],
 input: "",
 counter: 0,
 ordering: "default",
 history: []
};

function reducer(oldState = initialState, action){

  let state = JSON.parse(JSON.stringify(oldState));
  //state.history.push(oldState);

  switch (action.type){
    case ADD_TODO:
      state.counter += 1;
      action.todo._id = state.counter;
      state.input = "";
      state.todos.push(action.todo);
      return state;
    case DELETE_TODO:
      let i = state.todos.findIndex((todo) => todo._id===action.id);
      state.todos.splice(i, 1);
      return state;
    case DELETE_ALL:
      state.todos = [];
      return state;
    case UNCOMPLETED:
      state.todos.find((todo)=>todo._id===action.id).isComplete = false;
      return state;
    case COMPLETED:
      state.todos.find((todo)=>todo._id===action.id).isComplete = true;
      return state;
    case SET_DATE:
      state.todos.find((todo)=>todo._id===action.id).dateDue = action.date;
      return state;
    case ORDER_ALPHA:
      state.todos.sort((a, b) => a.description.localeCompare(b.description));
      return state;
    case ORDER_DATE:
    state.todos.sort((a,b) => {
      if(a.dateDue === null){
        return 1;
      }
      if(b.dateDue === null){
        return -1;
      }
      if(a.dateDue === b.dateDue)
      return 0;
      return a.dateDue < b.dateDue ? -1 : 1;
    });
      return state;
    case COLOR_SET:
      state.todos.find((todo)=>todo._id===action.id).color = action.color;
      return state;
    case STAR:
      state.todos.find((todo)=>todo._id===action.id).star = ! state.todos.find((todo)=>todo._id===action.id).star;
      return state;
    case ON_CHANGE:
      state.input = action.input;
      return state;
    case UNDO:
      state.history.pop();
      return state.history.pop();
    case LOAD_TODOS:
      action.todos.forEach( todo => state.todos.push(todo));
      return state;
    default: return state;
  }
}
export default reducer;

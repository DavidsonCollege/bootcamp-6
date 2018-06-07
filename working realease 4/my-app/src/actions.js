export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const DELETE_ALL = 'DELETE_ALL'
export const UNCOMPLETED = 'UNCOMPLETED'
export const COMPLETED = 'COMPLETED'
export const SET_DATE ='SET_DATE'
export const ORDER_ALPHA = 'ORDER_ALPHA'
export const ORDER_DATE = 'ORDER_DATE'
export const COLOR_SET = 'COLOR_SET'
export const STAR = 'STAR'
export const ON_CHANGE = 'ON_CHANGE'
export const UNDO = 'UNDO'
export const LOAD_TODOS = 'LOAD_TODOS'


export const onAddToDo = (description) => {
  console.log("hello from the add function");
  const todo= {
    description,
     dateDue: null,
      isComplete: false,
      _id: 0,
      color: "black",
      star: false
    }

    return {
  type:ADD_TODO,
  todo
}
}


export const onDeleteTodo = (id) => {

  return {
  type: DELETE_TODO,
  id
}
}

export const deleteAll = () => {

    return {
      type: DELETE_ALL
    }
}

export const markAsUncomplete = id => {
    return {
      type: UNCOMPLETED,
      id
    }
}

export const markAsComplete = id => {
    return {
      type: COMPLETED,
      id
    }
}

export const setDate = (id,date) => {

    return {
      type: SET_DATE,
      id,
      date
    }
}

export const orderAlpha= () => {
    return {
      type: ORDER_ALPHA}
}

export const setOrderingByDate = () => {
    return {
      type: ORDER_DATE}
}

export const setColor = (id,color) => {
    return {
      type: COLOR_SET,
      id,
      color}
}

export const setStar = id => {
    return {
      type: STAR,
      id}
}
export const onChange = input => {
  return{
    type: ON_CHANGE,
    input
   }
  }

  export const undo = () => {
    return{
      type: UNDO
    }
  }

export const addLoadedTodos = (todos) => {
  return {
    type: LOAD_TODOS,
    todos
  }
}

  export const loadTodos = () => {
    return (dispatch) => {
      fetch('https://raw.githubusercontent.com/DavidsonCollege/bootcamp-6/correctAE/todos.json')
      .then(res => res.json())
      .then(todos =>
        dispatch(addLoadedTodos(todos)));
        }
      }

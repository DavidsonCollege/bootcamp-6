export const onAddToDo = description => ({
  type: 'ADD_A_TODO',
  description
})

export const onChange = event => ({
  type: 'INPUT_BOX_TODO',
  event
})

export const onDeleteTodo = id => ({
  type: 'DELETE_TODO',
  id
})

export const deleteAll = {
  type: 'DELETE_ALL'
}

export const markAsUncomplete = id => ({
  type: 'MARK_UNCOMPLETE',
  id
})

export const markAsComplete = id => ({
  type: 'MARK_COMPLETE',
  id
})

export const changeDate = (dateDue,id) => ({
  type: 'CHANGE_DATE',
  dateDue,
  id
})

export const setDate = (event, id) => ({
  type: 'SET_DATE',
  event,
  id
})

export const setOrdering = {
  type: 'SET_ORDERING_ALPHABETICALLY',
}

export const setOrderingByDate = {
  type: 'SET_ORDERING_BY_DATE'
}

export const setColor = (event, id) => ({
  type: 'SET_COLOR',
  event,
  id
})

export const setStar = id => ({
  type: 'SET_STAR',
  id
})

export const undo = {
  type: 'UNDO'
}

export const LOAD_TODOS = "LOAD_TODOS"
export const loadingTodos = tempTodos => {
  return {
    type: LOAD_TODOS,
    tempTodos
  }
}
export function loadTodos(){
  return (dispatch) => {
  return fetch("https://raw.githubusercontent.com/DavidsonCollege/bootcamp-6/master/todos.json").then((res) => {
    return res.json().then((res) => {
      let tempTodos = [];
        res.map((todo) => {
          let newTodo = {
            description: todo.description,
            isComplete: todo.completed,
            color: todo.color,
            dateDue: todo.dueDate,
            _id: todo._id,
            star: false
          };
          tempTodos.push(newTodo);
        });
        dispatch(loadingTodos(tempTodos));
    });
  });
}
  // todos = [...state.todos];
  // let result = fetch("https://raw.githubusercontent.com/DavidsonCollege/bootcamp-6/master/todos.json").then(
  //   function(res){
  //     // console.log(res);
  //     return res.json();
  //   },
  //   console.log("++++++"),
  //
  // ).then(function(res){
  //   let tempTodos = [];
  //   res.map((todo) => {
  //     let newTodo = {
  //       description: todo.description,
  //       isComplete: todo.completed,
  //       color: todo.color,
  //       dateDue: todo.dueDate,
  //       _id: todo._id,
  //       star: false
  //     };
  //     tempTodos.push(newTodo);
  //   });
  //   return tempTodos;
  // });
  // console.log(result);

}

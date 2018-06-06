export const onAddToDo = event => ({
  type: 'ADD_A_TODO',
  event
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

export const changeDate = event => ({
  type: 'CHANGE_DATE',
  event
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

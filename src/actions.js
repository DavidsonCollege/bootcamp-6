export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const CHANGE_COLOR = 'CHANGE_COLOR'
export const CHANGE_DATE = 'CHANGE_DATE'
export const CHANGE_INPUT = 'CHANGE_INPUT'
export const CHANGE_DATE_INPUT = 'CHANGE_DATE_INPUT'
export const CHANGE_ORDER = 'CHANGE_ORDER'
export const CLEAR_TODO = 'CLEAR_TODO'
export const UNDO = 'UNDO'


export const Colors = {
  RED: 'red',
  BLUE: 'blue',
  GREEN: 'green',
  MAGENTA: 'magenta'
}

export const Orderings ={
  ALPHABETICAL: 'ALPHABETICAL',
  DUEDATE: 'DUEDATE'
}

export function undo(){
  return {type:UNDO}
}

export function clearTodo(){
  return {type: CLEAR_TODO}
}

export function changeOrder(order) {
  return {type: CHANGE_ORDER, order: order}
}

export function changeDateInput(date){
  return {type: CHANGE_DATE_INPUT, date: date}
}

export function changeInput(text){
  return {type: CHANGE_INPUT, text: text}
}

export function addTodo(text, dateInput) {
  return {type: ADD_TODO, todo: {
        description: text,
        _guid: Math.floor(Math.random() * 100000),
        dueDate: dateInput,
        completed: false,
        color: Colors.RED
        }
  };
}

export function completeTodo(_guid) {
  return {type: COMPLETE_TODO, _guid: _guid};
}

export function deleteTodo(_guid) {
  return {type: DELETE_TODO,_guid: _guid};
}

export function changeColor(color, _guid) {
  return {type: CHANGE_COLOR, color: color, _guid: _guid};
}

export function changeDate(date, _guid) {
  return {type: CHANGE_DATE, date: date, _guid: _guid};
}

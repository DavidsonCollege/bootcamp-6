import React from 'react';
import {
    addTodo,
    changeInput,
    changeDateInput,
    changeOrder,
    clearTodo,
    Orderings,
    changeColor,
    deleteTodo,
    changeDate,
    completeTodo
} from '../actions';

class TodoList extends React.Component {


    render() {
        return (
            <div>
                <h3> TODOS: </h3>

                <form onSubmit={(event) => {
                    event.preventDefault();
                    this.props.dispatch(addTodo(this.props.input, this.props.dateInput))
                }}>
                    <label>Enter Todo:</label>
                    <input type="text"
                           value={this.props.input}
                           onChange={(event) => {
                               event.preventDefault();
                               this.props.dispatch(changeInput(event.target.value))
                           }}/>

                    <input type="date"
                           value={this.props.dateInput}
                           onChange={(event) => {
                               event.preventDefault();
                               this.props.dispatch(changeDateInput(event.target.value))
                           }}/>
                    <button>Add!</button>
                </form>

                <button onClick={() => this.props.dispatch(changeOrder(Orderings.ALPHABETICAL))}>Order Alphabetically
                </button>
                <button onClick={() => this.props.dispatch(changeOrder(Orderings.DUEDATE))}>Order By Due Date</button>
                <button onClick={() => this.props.dispatch(clearTodo())}>Clear All Todos</button>

                <h3> Incomplete Todos </h3>
                <ol>
                    {this.props.todos.filter((item) => !item.completed).map((todo) => {
                        return <li
                            key={todo._guid}>
                            <div style={{color: todo.color}}>{todo.description} Due: {todo.dueDate}
                                <br></br>
                                <button onClick={() => this.props.dispatch(completeTodo(todo._guid))}
                                        value={todo._guid}>Toggle Status
                                </button>

                                <select onChange={(event) => {
                                    event.preventDefault();
                                    this.props.dispatch(changeColor(event.target.value, todo._guid))
                                }}>
                                    <option value="red">red</option>
                                    <option value="green">Magenta</option>
                                    <option value="blue">Blue</option>
                                    <option value="magenta">Green</option>
                                </select>
                                <button onClick={() => this.props.dispatch(deleteTodo(todo._guid))}
                                >Remove
                                </button>
                                <input type="date"
                                       onChange={(event) => {
                                           event.preventDefault();
                                           this.props.dispatch(changeDateInput(event.target.value))
                                       }}
                                />
                                <button onClick={(event) => {
                                    event.preventDefault();
                                    this.props.dispatch(changeDate(this.props.dateInput, todo._guid))
                                }}>Change
                                </button>
                            </div>
                        </li>
                    })}
                </ol>

            </div>
        )
    }

}

export default TodoList;

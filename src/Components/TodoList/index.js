import React, { Component } from 'react'
import TodoItem from './TodoItem'
export default class TodoList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.todo.map(item => {
                        return (
                            <TodoItem
                                DeleteTodo={this.props.DeleteTodo}
                                checktype = {this.props.checktype}
                                key={Math.random()}
                                {...item}
                            />
                        )
                    })
                }
            </ul>
        )
    }
}

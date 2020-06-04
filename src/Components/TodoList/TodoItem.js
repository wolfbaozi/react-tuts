import React, { Component } from 'react'
export default class TodoItem extends Component {
    constructor() {
        super()
        this.state = {}
    }
    handleDelete = () => {
        this.props.DeleteTodo(this.props.id)
    }
    checktype = () => {
        this.props.checktype(this.props.id)
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState);
    }
    render() {
        console.log('次数');
        return (
            <li>
                <input
                    type="checkbox"
                    checked={this.props.isfish}
                    onChange={this.checktype}
                />
                {this.props.name} {this.props.isfish ? '完成' : '未完成'}
                <i key={this.props.id} onClick={this.handleDelete} style={{ color: 'red' }}>删除</i>
            </li>
        )
    }
}


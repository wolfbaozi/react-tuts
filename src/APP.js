import React, { Component, Fragment } from 'react'
import { TodoInput, TodoHeader, TodoList, Like } from './Components'
export default class APP extends Component {
    constructor() {
        super()
        this.state = {
            title: "待办事项",
            btn: "添加列表",
            htmltext: '<div>列表事项<p>已完成</p></div>',
            todo: [{
                id: 1,
                name: "job",
                isfish: false
            }, {
                id: 22,
                name: "jorage",
                isfish: true
            }]
        }
    }
    checktype = (id) => {
        this.state.todo.map(item => {
            if (item.id === id) {
                item.isfish = !item.isfish
            }
            return this.state.todo
        })
        this.setState(() => {
            return {
                todo: this.state.todo
            }
        })
    }
    AddTodo = (index) => {
        console.log(index);
        this.setState({
            todo: this.state.todo.concat({
                id: Math.random(),
                name: index
            }
            )
        })
    }
    Delete = (id) => {
        for (let i = 0; i < this.state.todo.length; i++) {
            if (id === this.state.todo[i].id) {
                this.state.todo.splice(i, 1)
                return this.state.todo
            }
        }
    }
    DeleteTodo = (id) => {
        // console.log(id);
        this.setState({
            todo: this.Delete(id)
        })
    }
    render() {
        return (
            <Fragment>
                {/* {dangerouslySetInnerHTML就是用来加载后端返回的HTML代码的} */}
                {
                    <div dangerouslySetInnerHTML={{ __html: this.state.htmltext }} />
                }
                <TodoHeader title={this.state.title}>
                    国家机密
                </TodoHeader>
                <TodoInput
                    btn={this.state.btn}
                    AddTodo={this.AddTodo} />
                <TodoList
                    todo={this.state.todo}
                    DeleteTodo={this.DeleteTodo}
                    checktype={this.checktype}
                />
                <Like />
            </Fragment>
        )
    }
}

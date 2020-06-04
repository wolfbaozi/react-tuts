import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types';

export default class TodoInput extends Component {
    static propTypes = {
        btn: PropTypes.string.isRequired
    }
    static defaultPros = {
        btn: "添加todo"
    }
    constructor() {
        super()
        this.state = {
            inputValue: ''
        }
        this.inputDom = createRef()
    }
    handleChange = (e) => {
        this.setState({
            inputValue: e.currentTarget.value
        })
    }
    handleAdd = () => {
        if (this.state.inputValue !== "") {
            this.props.AddTodo(this.state.inputValue)
            this.setState({
                inputValue: ''
            }, () => {
                this.inputDom.current.focus()
            })
        }

    }
    handleKeyUp = (e) => {
        // console.log(e);
        if (e.keyCode === 13) {
            this.handleAdd()
        }
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                    onKeyUp={this.handleKeyUp}
                    ref={this.inputDom} />
                <button onClick={this.handleAdd}>{this.props.btn}</button>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class Like extends Component {
    constructor() {
        super()
        this.state = {
            liked: false
        }
    }
    handelClick = () => {
        //这是第一种setState的方法
        // this.setState({
        //     liked: !this.state.liked
        // })
        //第二种，有两个参数 回调函数里面可以获取最新的state的数值
        this.setState((e) => {
            console.log(e)
            return {
                liked: !e.liked
            }
        }, () => {
            console.log(this.state.liked);
        })
    }
    render() {
        return (
            <div>
                <span onClick={this.handelClick}>
                    {this.state.liked ? "棒❤️" : "差评🖤"}
                </span>
            </div>
        )
    }
}

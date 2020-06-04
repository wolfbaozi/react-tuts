import React, { Component } from 'react'
import ReactDom from 'react-dom'
import './index.css'
import classNames from 'classnames'
import styled from 'styled-components'
import APP from './APP'
class Myapp extends Component {
    render() {
        const style = { color: "blue" }
        const Li = styled.li({
            color: "yellow"
        })
        return (
            <div>
                <APP />
                <h1 className="title">好好学习天天向上</h1>
                <p>{this.props.title}</p>
                <ol>
                    <li style={style}>react第一种样式直接添加style</li>
                    <li className="title">第二种使用classname</li>
                    <li className={classNames()}>使用classnames</li>
                    <Li >使用styled-components</Li>
                </ol>
            </div>
        )
    }
}
// const APP = (props) => {
//     return (
//         <div>
//             <p>还行吧</p>
//             <h1>are you ok {props.title} </h1>
//         </div>
//     )
// }
// const creatapp = app({
//     title: 'welcome to react'
// })

ReactDom.render(
    <Myapp title="local" />,
    // <APP></APP>,
    document.querySelector("#root")

)
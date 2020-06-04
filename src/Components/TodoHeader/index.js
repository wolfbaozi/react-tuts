import React from 'react'
import PropTypes from 'prop-types';
export default function TodoHeader(props) {
    return (
        <>
        <h1>
            {props.title}
        </h1>
            <h3>
                {props.children}
            </h3>
        </>

    )
}
TodoHeader.propTypes={
    title:PropTypes.string.isRequired
}

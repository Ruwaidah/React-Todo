import React from 'react'

export default function TodoForm(props) {
    // console.log(props.newtask)
    return (
        <>
        <input type = "text" placeholder = "...todo" onChange = {props.newtask}/>
        <button onClick = {props.cilckadd}>add Todo</button>
        <button onClick = { props.delete }>Clear Completed</button>
        </>
    )
}
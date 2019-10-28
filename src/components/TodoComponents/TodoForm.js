import React from 'react'

export default function TodoForm(props) {
    console.log(props)
    return (
        <form onSubmit = {props.addTodo}>
        <input className = "inputTag" type = "text" placeholder = "...todo"  value = {props.input} onChange = {props.handleChanges}/>
        <button class = "submitbtn" type = "submit">add Todo</button>
        </form>
    )
}
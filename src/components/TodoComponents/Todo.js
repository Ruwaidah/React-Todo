import React from 'react'

export default function Todo(props) {
       console.log(props.id)
           return (  <div  
              className={`item${props.item.completed ? ` completed` : ``}`}
              onClick={() => props.toggleItem(props.item.id)}>
              <p className = "eachtask">{props.item.name}</p>
            </div>)
    }
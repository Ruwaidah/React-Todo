// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

 export default function TodoList(props) {
     return (
         <div>
         {props.theArray.map((elem,ind) => (
                <div key = {ind} onClick = {() => props.checktask(elem) }>
                    <Todo task = {elem} checktask = {props.checktask}/>
                 </div>
           
         )
         )}
         </div>
     )
 }
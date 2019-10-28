import React, { useState } from 'react';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      newTask: [{
        task: "",
        id : Date.now(),
        completed: false
      }],
      input: ''

    }
  }

    onValueChange = (event) => {
      this.setState({
        input:  event.target.value,
                      id: Date.now()
        })
      }
    onClickAddTask = () => {
      this.setState({ 
       newTask: [...this.state.newTask, {
         task: this.state.input,
         id: Date.now(),
         completed: false
       }]
      }
        )
      document.querySelector("input").value = "";
    }

    onClickClearTask = (event) => {
      event.completed = !(event.completed)
      console.log(event)

      };
      checkcompo = (bool) => {
        console.log(bool)
        return bool.completed === false
      }

      deleteTaskComp = () => {
        let myobj = Object.assign({}, this.state.newTask.filter(this.checkcompo))
        this.setState({
          newTask: this.state.newTask.filter(this.checkcompo)
        })
        
      }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList theArray = {this.state.newTask} checktask = {this.onClickClearTask}/>
        <TodoForm newtask = {this.onValueChange}  cilckadd = {this.onClickAddTask} delete = {this.deleteTaskComp} />
    </div>
    );
  }
}

export default App;
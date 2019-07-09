import React, { Component } from 'react';
import AddTask from './AddTask'
import TaskList from './TaskList'
import './App.css';

class App extends Component {
  counter = 0
  state = {
    tasks: []
  }

  deleteTask = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);

    this.setState({
        tasks
      })
  }

  changeTaskStatus = (id) => {
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if(task.id === id) {
        task.active = false;
      }
    })
    this.setState({
      tasks
    })
  }

  addTask = (text, important) => {
    const task = {
      id: this.counter,
      text, 
      important,
      active: true,
    }
    this.counter++
    
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))

    return true
}

render() {
  return (
    <div className="App">
      <h1>Shopping list</h1>
      <AddTask add={this.addTask} />
      <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus}/>
    </div>
  );
}
}

export default App;


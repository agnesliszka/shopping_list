import React from 'react';
import Task from './Task';
import './TaskList.css';

const TaskList = (props) => {

  const active = props.tasks.filter(task => task.active);
  const done = props.tasks.filter(task => !task.active);

  const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
  const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
  return (
      <div className="tasklist">
        <div className="active">
          <h3>To be purchased <span>({active.length})</span></h3>
          {activeTasks.length > 0 ? activeTasks : <p>No elements to be purchased. You are so lucky!</p>}
        </div>
  
        <hr />
  
        <div className="done">
          <h3>Purchased <span>({done.length})</span></h3>
          {doneTasks}
        </div>

      </div>
    );
}
 
export default TaskList;
import React from 'react';
import Task from './Task';

const Tasks = ({ tasks, toggleReminder }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} toggleReminder={toggleReminder} />
      ))}
    </div>
  );
};

export default Tasks;

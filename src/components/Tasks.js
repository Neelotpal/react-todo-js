import React from 'react';
import Task from './Task';

const Tasks = ({ tasks, toggleReminder, onDelete }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleReminder={toggleReminder}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default Tasks;

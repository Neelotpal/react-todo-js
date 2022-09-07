import React from 'react';

const Task = ({ task, toggleReminder }) => {
  return (
    <div
      className={`task ${task.reminder && 'reminder'}`}
      onDoubleClick={(e) => toggleReminder(task.id)}
    >
      <h3> {task.text} </h3>
      <p> {task.day} </p>
    </div>
  );
};

export default Task;

import React from 'react';

const Task = ({ task, toggleReminder, onDelete }) => {
  return (
    <div
      className={`task ${task.reminder && 'reminder'}`}
      onDoubleClick={(e) => toggleReminder(task.id)}
    >
      <section
        style={{ float: 'right', cursor: 'pointer' }}
        onClick={(e) => onDelete(task.id)}
      >
        ❌
      </section>
      <h2> id: {task.id} </h2>
      <h3> {task.text} </h3>
      <p> {task.day} </p>
    </div>
  );
};

export default Task;

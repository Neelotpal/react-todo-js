import React, { useState } from 'react';

const AddTask = ({ addTask, toggleShowAddTask }) => {
  const [taskText, setTaskText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const clearValues = () => {
    setTaskText('');
    setDay('');
    setReminder(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    addTask({ text: taskText, day, reminder });
    clearValues();
    toggleShowAddTask();
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <lable> Task: </lable>
        <input
          type="text"
          placeholder="add task"
          required
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <lable> Day: </lable>
        <input
          type="text"
          placeholder="add day"
          required
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control">
        <lable> Reminder: </lable>
        <input
          type="checkbox"
          placeholder="set reminder"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="save" className="btn btn-block" />
    </form>
  );
};

export default AddTask;

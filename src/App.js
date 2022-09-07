import React, { useState } from 'react';
import db from './db.json';
import './style.css';
import Tasks from './components/Tasks';

export default function App() {
  const [tasks, setTasks] = useState(db.tasks);

  //toggleReminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  //delete task
  const onDelete = (id) => {
    const response = confirm('Are you sure you want to delete the task ?');
    if (response) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  return (
    <div>
      <Tasks
        tasks={tasks}
        toggleReminder={toggleReminder}
        onDelete={onDelete}
      />
    </div>
  );
}

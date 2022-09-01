import React, { useState } from 'react';
import db from './db.json';
import './style.css';
import Tasks from './components/Tasks';

export default function App() {
  const [tasks, setTasks] = useState(db.tasks);

  console.log(tasks);
  return (
    <div>
      <Tasks tasks={tasks} />
    </div>
  );
}

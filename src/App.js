import React, { useState } from 'react';
import db from './db.json';
import './style.css';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Header from './components/Header';
import About from './components/About';

export default function App() {
  const [tasks, setTasks] = useState(db.tasks);
  const [showAddTask, setShowAddTask] = useState(false);

  //toggleReminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  //add task
  const addTask = (newTask) => {
    newTask.id =
      Math.max.apply(
        null,
        tasks.map((task) => task.id)
      ) + 1;

    setTasks([...tasks, newTask]);
  };

  //delete task
  const onDelete = (id) => {
    const response = confirm('Are you sure you want to delete the task ?');
    if (response) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  //toggle show Add task
  const toggleShowAddTask = () => {
    setShowAddTask(!showAddTask);
  };

  return (
    <>
      <Header showAddTask={showAddTask} onShowAddTask={toggleShowAddTask} />
      {showAddTask && (
        <AddTask addTask={addTask} toggleShowAddTask={toggleShowAddTask} />
      )}
      <Tasks
        tasks={tasks}
        toggleReminder={toggleReminder}
        onDelete={onDelete}
      />
    </>
  );

  // return (
  //   <BrowserRouter>
  //     <div>
  //       hi
  //       <Routes>
  //         <Route
  //           path="/"
  //           element={
  //             <>
  //               <Header
  //                 showAddTask={showAddTask}
  //                 onShowAddTask={toggleShowAddTask}
  //               />
  //               {showAddTask && (
  //                 <AddTask
  //                   addTask={addTask}
  //                   toggleShowAddTask={toggleShowAddTask}
  //                 />
  //               )}
  //               <Tasks
  //                 tasks={tasks}
  //                 toggleReminder={toggleReminder}
  //                 onDelete={onDelete}
  //               />
  //             </>
  //           }
  //         />

  //         <Route path="/about" element={<About />} />
  //       </Routes>
  //     </div>
  //   </BrowserRouter>
  // );
}

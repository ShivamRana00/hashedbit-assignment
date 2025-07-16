
// React - To Do App

// Create a Todo List app

// Add the following functionality to the app:
// * Add Button to add new tasks on click.
// * The 
//  field should be cleared upon successful addition.
// * Remove tasks from the Todo List upon clicking the "Delete" button.
// * All To do List Should be listed in ascending order.

// Notes :-
// The focus of this question is on functionality, not the styling. There's no need to write any custom CSS.
// You may modify the markup (e.g. adding ids, data attributes, replacing some tags, etc), but the result should remain the same visually.
// You may want to think about ways to improve the user experience of the application and implement them (you get bonus credit for doing ).
import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === '') return;

    const updatedTasks = [...tasks, task.trim()];
    updatedTasks.sort();
    setTasks(updatedTasks);
    setTask('');
  };

  const deleteTask = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={task}
        placeholder="Enter a task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

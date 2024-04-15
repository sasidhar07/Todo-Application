// App.js
import React from 'react';
import TaskInput from './components/TasksInput/TaskInput';
import TaskList from './components/TasksList/TaskList';
import './App.css';


function App() {
  return (
    <div className='mainContainer'>
      <div className="app">
        <h1>To-Do List</h1>
        <TaskInput />
        <TaskList />
      </div>
    </div>
  );
}

export default App;

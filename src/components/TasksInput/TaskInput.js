
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import "./TaskInput.css"

function TaskInput() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (title.trim() === '' || description.trim() === '') {
      alert('Title and description cannot be empty!');
      return; 
    }

    dispatch(addTask(title, description));
    setTitle('');
    setDescription('');
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default TaskInput;

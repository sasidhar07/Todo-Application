import React from 'react';
import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../redux/actions'; 
import './TaskList.css'; 

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggleTask = (id) => {
    dispatch(toggleTask(id)); 
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className="task">
          <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </div>
          <div className='taskActions'>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
            />
            <MdDelete className='deleteIcon' onClick={() => handleDeleteTask(task.id)} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;

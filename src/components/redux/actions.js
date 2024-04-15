//Action to add task
export const addTask = (title, description) => {
  return {
    type: 'ADD_TASK',
    payload: {
      id: Math.random().toString(36).substr(2, 9),
      title,
      description,
      completed: false, 
    },
  };
};

// Action to delete task

export const deleteTask = (id) => {
  return {
    type: 'DELETE_TASK',
    payload: id,
  };
};

// Action to toggle the completion status of a task
export const toggleTask = (id) => {
  return {
    type: 'TOGGLE_TASK',
    payload: id,
  };
};

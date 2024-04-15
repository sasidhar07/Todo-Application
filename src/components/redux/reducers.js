
const initialState = {
  tasks: localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const newTask = {
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description,
        completed: false, // Initialize completion status as false
      };
      const updatedTasks = [...state.tasks, newTask];
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return {
        tasks: updatedTasks,
      };
    case 'TOGGLE_TASK':
      const toggledTasks = state.tasks.map((task) =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
      localStorage.setItem('tasks', JSON.stringify(toggledTasks));
      return {
        tasks: toggledTasks,
      };
    case 'DELETE_TASK':
      const filteredList = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(filteredList));
      return {
        tasks: filteredList,
      };
    default:
      return state;
  }
};

export default reducer;

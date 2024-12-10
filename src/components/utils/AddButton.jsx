import React from 'react';

const AddTaskButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className='bg-blue-500 text-white px-6 py-2 rounded-md'>
      Add Task
    </button>
  );
};

export default AddTaskButton;

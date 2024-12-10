import React from 'react';

export default function DeleteModal({ onDelete, onCancel, taskId }) {
    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-10">
            <div className=" bg-white shadow-lg max-w-[400px] p-8 rounded-lg">
                <div className="modal-content">
                    <p className='text-xl font-semibold'>Are you sure you want to delete this task?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptates tempora cumque delectus.</p>
                    <div className="flex gap-4 items-center my-4">
                        <button onClick={() => onDelete(taskId)} className="bg-red-600 text-white px-6 py-2 text-lg rounded-md">
                            Delete
                        </button>
                        <button onClick={onCancel} className="px-6 py-2 text-lg bg-slate-50 border rounded-md">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

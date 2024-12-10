// AddTaskModal.js
import React, { useState } from 'react';
import Button from '../button/Button';

export default function AddTaskModal({ onClose, onAddTask }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && description) {
            onAddTask({ title, description, id: Date.now(), status: 'started' });
            onClose(); // Close modal after adding task
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-10">
            <div className="bg-white p-6 rounded-lg w-[400px]">
                <h3 className="text-xl font-semibold mb-4">Add New Task</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="border p-2 w-full rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="border p-2 w-full rounded-md"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <div className="flex justify-end gap-4">
                        <Button
                            text={'add task'}
                            classes={'bg-blue-500 ring-blue-500'}
                        />
                        <Button
                            text={'Cancel'}
                            onClick={onClose}
                            classes={'text-black bg-slate-50 border'}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

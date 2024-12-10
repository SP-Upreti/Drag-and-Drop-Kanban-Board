import React, { useState, useEffect } from 'react';
import { taskData } from '../../data/Data';
import DeleteModal from '../modal/deleteModal';
import AddTaskModal from '../modal/AddTaskModal';
import TaskBoard from './TaskBoard';
import Button from '../button/Button';

export default function Board() {

    const [deleteModal, setDeleteModal] = useState(false);
    const [taskToDelete, setTaskToDelete] = useState(null);

    // Retrieve tasks from localStorage or use default taskData
    const loadDataFromLocalStorage = () => {
        const savedTasks = localStorage.getItem('task');
        if (savedTasks) {
            try {
                const parsedTasks = JSON.parse(savedTasks);
                return {
                    started: Array.isArray(parsedTasks.started) ? parsedTasks.started : [],
                    inProgress: Array.isArray(parsedTasks.inProgress) ? parsedTasks.inProgress : [],
                    completed: Array.isArray(parsedTasks.completed) ? parsedTasks.completed : []
                };
            } catch (error) {
                console.error('Error parsing tasks from localStorage:', error);
                return {
                    started: [],
                    inProgress: [],
                    completed: []
                };
            }
        }

        return {
            started: taskData.filter(task => task.status === 'started'),
            inProgress: taskData.filter(task => task.status === 'inProgress'),
            completed: taskData.filter(task => task.status === 'completed')
        };
    };

    const [started, setStarted] = useState(loadDataFromLocalStorage().started);
    const [inProgress, setInProgress] = useState(loadDataFromLocalStorage().inProgress);
    const [completed, setCompleted] = useState(loadDataFromLocalStorage().completed);


    // const { state, pushToHistory, undo, redo } = useHistory()

    // History stacks for undo and redo
    const [undoStack, setUndoStack] = useState([]);
    const [redoStack, setRedoStack] = useState([]);

    // State for search query
    const [searchQuery, setSearchQuery] = useState('');

    // Filter tasks based on search query
    const filterTasks = (tasks) => {
        if (!searchQuery) return tasks;
        return tasks.filter(task =>
            task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            task.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
    };

    // Filtered tasks for each column
    const filteredStarted = filterTasks(started);
    const filteredInProgress = filterTasks(inProgress);
    const filteredCompleted = filterTasks(completed);

    // Save to localStorage
    const saveToLocalStorage = () => {
        const tasks = {
            started,
            inProgress,
            completed
        };
        localStorage.setItem('task', JSON.stringify(tasks));
    };

    // Push current state to undo stack and clear redo stack
    const pushToHistory = () => {
        setUndoStack((prevStack) => [
            {
                started,
                inProgress,
                completed
            },
            ...prevStack
        ]);
        setRedoStack([]); // Clear redo stack
    };

    // On Drag End: update state and localStorage
    const onDragEnd = (result) => {
        const { source, destination } = result;

        if (!destination) return;

        const sourceColumn = getColumn(source.droppableId);
        const destColumn = getColumn(destination.droppableId);

        let updatedSourceColumn = Array.from(sourceColumn);
        const [movedTask] = updatedSourceColumn.splice(source.index, 1);

        let updatedDestColumn = Array.from(destColumn);
        updatedDestColumn.splice(destination.index, 0, movedTask);

        setColumn(source.droppableId, updatedSourceColumn);
        setColumn(destination.droppableId, updatedDestColumn);

        pushToHistory(); // Save current state to history

        saveToLocalStorage();
    };

    // Delete task functionality
    const deleteTask = (taskId) => {
        const deleteFromColumn = (columnData) => columnData.filter(task => task.id !== taskId);

        setStarted(deleteFromColumn(started));
        setInProgress(deleteFromColumn(inProgress));
        setCompleted(deleteFromColumn(completed));

        pushToHistory(); // Save current state to history after deletion
        saveToLocalStorage();
        setDeleteModal(false); // Close the modal after deletion
    };

    const getColumn = (id) => {
        if (id === 'started') return started;
        if (id === 'inProgress') return inProgress;
        if (id === 'completed') return completed;
        return [];
    };

    const setColumn = (id, data) => {
        if (id === 'started') setStarted(data);
        if (id === 'inProgress') setInProgress(data);
        if (id === 'completed') setCompleted(data);
    };

    // Trigger delete modal
    const handleDelete = (taskId) => {
        setTaskToDelete(taskId);
        setDeleteModal(true);
    };

    // Undo the last state change
    const undo = () => {
        const lastState = undoStack[0];
        if (lastState) {
            setStarted(lastState.started);
            setInProgress(lastState.inProgress);
            setCompleted(lastState.completed);

            // Move this state to the redo stack
            setRedoStack([{
                started,
                inProgress,
                completed
            }, ...redoStack]);

            // Remove from undo stack
            setUndoStack(undoStack.slice(1));
            saveToLocalStorage();
        }
    };

    // Redo the last undone state change
    const redo = () => {
        const lastUndoneState = redoStack[0];
        if (lastUndoneState) {
            setStarted(lastUndoneState.started);
            setInProgress(lastUndoneState.inProgress);
            setCompleted(lastUndoneState.completed);

            // Move this state back to the undo stack
            setUndoStack([{
                started,
                inProgress,
                completed
            }, ...undoStack]);

            // Remove from redo stack
            setRedoStack(redoStack.slice(1));
            saveToLocalStorage();
        }
    };

    // Handle keyboard navigation and undo/redo
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.ctrlKey && event.key === 'z') {
                undo();
            } else if (event.ctrlKey && event.key === 'y') {
                redo();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [undoStack, redoStack, started, inProgress, completed]);



    const [showAddTaskModal, setShowAddTaskModal] = useState(false);

    const addTask = (task) => {
        setStarted((prevStarted) => {
            const updatedStarted = [...prevStarted, task];
            return updatedStarted;
        });
        saveToLocalStorage(); // Ensure localStorage is updated after the state change
        pushToHistory(); // Save to history after adding a new task
    };


    return (
        <section className="max-w-7xl mx-auto p-4 my-10 relative">

            <div>
                <h2 className="text-3xl font-semibold">Personal</h2>
                <p className="text-lg">A board to keep track of personal tasks</p>
            </div>

            {/* Search Bar */}
            <div className="my-5 flex justify-between items-center gap-5 sm:gap-10 flex-wrap">
                <input
                    type="text"
                    placeholder="Search tasks..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="p-2 border rounded w-[25rem]"
                />
                <Button
                    onClick={() => setShowAddTaskModal(true)}
                    text={'add task'}
                    classes={'ring-blue-500 bg-blue-500'}
                />
            </div>

            {/* Task Board */}
            <TaskBoard
                started={started}
                inProgress={inProgress}
                onDragEnd={onDragEnd}
                completed={completed}
                handleDelete={handleDelete}
                filteredCompleted={filteredCompleted}
                filteredInProgress={filteredInProgress}
                filteredStarted={filteredStarted}
            />

            {/* Delete Modal */}
            {deleteModal && (
                <DeleteModal
                    taskId={taskToDelete}
                    onDelete={deleteTask}
                    onCancel={() => setDeleteModal(false)}
                />
            )}
            {/* Add Task Modal */}
            {showAddTaskModal && (
                <AddTaskModal
                    onClose={() => setShowAddTaskModal(false)}
                    onAddTask={addTask}
                />
            )}
        </section>
    );
}


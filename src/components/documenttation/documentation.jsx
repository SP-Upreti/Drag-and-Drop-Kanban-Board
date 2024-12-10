import React from 'react';

export default function Documentation() {
    return (
        <div className="p-8 bg-gray-100">
            <h1 className="text-3xl font-bold text-gray-800">Task Management Board Documentation</h1>

            {/* Overview Section */}
            <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700">Overview</h2>
                <p className="mt-4">
                    This React application is a <strong>Task Management Board</strong> that helps users organize tasks into three categories:
                    <strong>Started</strong>, <strong>In Progress</strong>, and <strong>Completed</strong>. Users can:
                </p>
                <ul className="list-disc pl-6 mt-2">
                    <li>Add tasks.</li>
                    <li>Drag and drop tasks between columns.</li>
                    <li>Search for tasks.</li>
                    <li>Delete tasks.</li>
                    <li>Use <code>Undo</code> and <code>Redo</code> functionality to revert or repeat changes.</li>
                </ul>
                <p className="mt-2">
                    The app persists data in <code>localStorage</code> for session continuity.
                </p>
            </div>

            {/* Features Section */}
            <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700">Features</h2>
                <ul className="list-disc pl-6 mt-2">
                    <li><strong>Task Columns</strong>:
                        <ul className="list-inside mt-2">
                            <li><strong>Started</strong>: Tasks that are yet to begin.</li>
                            <li><strong>In Progress</strong>: Tasks currently being worked on.</li>
                            <li><strong>Completed</strong>: Finished tasks.</li>
                        </ul>
                    </li>
                    <li><strong>Search Functionality</strong>: Filter tasks based on titles or descriptions by entering keywords in the search bar.</li>
                    <li><strong>Drag-and-Drop Support</strong>: Reorganize tasks by dragging them between columns. The app uses React's <code>onDragEnd</code> event to update task states dynamically.</li>
                    <li><strong>Undo/Redo</strong>: Undo (<code>Ctrl+Z</code>) and Redo (<code>Ctrl+Y</code>) functionality to revert or restore task changes. Tracks history for all task state changes.</li>
                    <li><strong>Modals</strong>:
                        <ul className="list-inside mt-2">
                            <li><strong>Add Task Modal</strong>: Allows users to create a new task.</li>
                            <li><strong>Delete Modal</strong>: Confirms before deleting a task.</li>
                        </ul>
                    </li>
                    <li><strong>Persistent Data</strong>: Uses <code>localStorage</code> to save task data. The app loads saved tasks upon initialization.</li>
                </ul>
            </div>

            {/* File Structure Section */}
            <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700">File Structure</h2>
                <p className="mt-2"><strong>Key Files:</strong></p>
                <ul className="list-disc pl-6 mt-2">
                    <li><code>Board.js</code>: The main component that manages task states and renders the board.</li>
                    <li><code>useHistory.js</code>: A custom hook that manages <code>Undo</code> and <code>Redo</code> functionality.</li>
                    <li><code>TaskBoard.js</code>: Renders the three task columns and handles drag-and-drop.</li>
                    <li><code>DeleteModal.js</code>: A modal for confirming task deletion.</li>
                    <li><code>AddTaskModal.js</code>: A modal for adding new tasks.</li>
                </ul>
            </div>

            {/* Components Section */}
            <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700">Components</h2>

                <h3 className="text-xl font-semibold text-gray-700 mt-4">Board</h3>
                <p className="mt-2"><strong>Props:</strong> None</p>
                <p className="mt-2"><strong>State:</strong></p>
                <ul className="list-disc pl-6 mt-2">
                    <li><code>started</code>: Array of tasks in the "Started" column.</li>
                    <li><code>inProgress</code>: Array of tasks in the "In Progress" column.</li>
                    <li><code>completed</code>: Array of tasks in the "Completed" column.</li>
                    <li><code>deleteModal</code>: Boolean to toggle the delete modal.</li>
                    <li><code>taskToDelete</code>: ID of the task being deleted.</li>
                    <li><code>searchQuery</code>: User input for task filtering.</li>
                    <li><code>showAddTaskModal</code>: Boolean to toggle the add task modal.</li>
                </ul>
                <p className="mt-2"><strong>Methods:</strong></p>
                <ul className="list-disc pl-6 mt-2">
                    <li><code>loadDataFromLocalStorage</code>: Fetches tasks from <code>localStorage</code> or initializes with default data.</li>
                    <li><code>onDragEnd</code>: Handles task drag-and-drop between columns.</li>
                    <li><code>deleteTask</code>: Deletes a task by its ID.</li>
                    <li><code>addTask</code>: Adds a new task to the "Started" column.</li>
                    <li><code>pushToHistory</code>, <code>undo</code>, <code>redo</code>: State history management (via <code>useHistory</code>).</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-700 mt-4">useHistory</h3>
                <p className="mt-2"><strong>Props:</strong> <code>initialState</code> (the initial task state).</p>
                <p className="mt-2"><strong>Returns:</strong></p>
                <ul className="list-disc pl-6 mt-2">
                    <li><code>state</code>: The current state.</li>
                    <li><code>setState</code>: Updates the state.</li>
                    <li><code>pushToHistory</code>: Adds the current state to the undo stack.</li>
                    <li><code>undo</code>: Reverts to the previous state.</li>
                    <li><code>redo</code>: Restores the undone state.</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-700 mt-4">TaskBoard</h3>
                <p className="mt-2"><strong>Props:</strong></p>
                <ul className="list-disc pl-6 mt-2">
                    <li><code>started</code>, <code>inProgress</code>, <code>completed</code>: Arrays of tasks for each column.</li>
                    <li><code>onDragEnd</code>: Drag-and-drop handler.</li>
                    <li><code>filteredStarted</code>, <code>filteredInProgress</code>, <code>filteredCompleted</code>: Filtered task lists for display.</li>
                </ul>
                <p className="mt-2"><strong>Functionality:</strong> Displays tasks in draggable lists and passes drag-and-drop events to the parent component.</p>

                <h3 className="text-xl font-semibold text-gray-700 mt-4">DeleteModal</h3>
                <p className="mt-2"><strong>Props:</strong></p>
                <ul className="list-disc pl-6 mt-2">
                    <li><code>taskId</code>: ID of the task to delete.</li>
                    <li><code>onDelete</code>: Callback to delete a task.</li>
                    <li><code>onCancel</code>: Callback to close the modal without deleting.</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-700 mt-4">AddTaskModal</h3>
                <p className="mt-2"><strong>Props:</strong></p>
                <ul className="list-disc pl-6 mt-2">
                    <li><code>onClose</code>: Callback to close the modal.</li>
                    <li><code>onAddTask</code>: Callback to add a new task.</li>
                </ul>
            </div>

            {/* Data Model Section */}
            <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700">Data Model</h2>
                <h3 className="text-xl font-semibold text-gray-700 mt-4">Task Object</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-md mt-2">
                    {`{
  "id": "string",       // Unique identifier for the task
  "title": "string",    // Task title
  "description": "string", // Task description
  "status": "string"    // "started" | "inProgress" | "completed"
}`}
                </pre>
            </div>

            {/* How to Use Section */}
            <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700">How to Use</h2>
                <p className="mt-2">To use this Task Management Board:</p>
                <ol className="list-decimal pl-6 mt-2">
                    <li>Install the app dependencies with <code>npm install</code>.</li>
                    <li>Run the app using <code>npm start</code>.</li>
                    <li>Interact with the board: Add, delete, and drag tasks between columns.</li>
                    <li>Use the search bar to filter tasks.</li>
                    <li>Use <code>Undo</code> and <code>Redo</code> to manage task changes.</li>
                </ol>
            </div>
        </div>
    );
}

import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TaskColumn from '../utils/taskColumn';

const TaskBoard = ({ onDragEnd, handleDelete, filteredStarted, filteredInProgress, filteredCompleted }) => {
    return (
        <div className="bg-slate-200 p-8 relative my-5 rounded-md max-h-[70vh] overflow-auto">
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="grid grid-cols-3 gap-10">
                    <Droppable droppableId="started" aria-label="Started tasks">
                        {(provided) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                role="list"
                                aria-label="Started tasks"
                            >
                                <TaskColumn
                                    deleteTask={handleDelete}
                                    title="Started"
                                    data={filteredStarted}
                                />
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>

                    <Droppable droppableId="inProgress" aria-label="In Progress tasks">
                        {(provided) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                role="list"
                                aria-label="In Progress tasks"
                            >
                                <TaskColumn
                                    deleteTask={handleDelete}
                                    title="In Progress"
                                    data={filteredInProgress}
                                />
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>

                    <Droppable droppableId="completed" aria-label="Completed tasks">
                        {(provided) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                role="list"
                                aria-label="Completed tasks"
                            >
                                <TaskColumn
                                    deleteTask={handleDelete}
                                    title="Completed"
                                    data={filteredCompleted}
                                />
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </div>
            </DragDropContext>
        </div>
    );
};

export default TaskBoard;

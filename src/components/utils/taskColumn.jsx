import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import DeleteModal from '../modal/deleteModal';

export default function TaskColumn({ data, title, deleteTask }) {
    return (
        <div>
            <span className={`${title == "Started" ? "bg-orange-400 text-white" : title == "In Progress" ? "bg-blue-500 text-white" : "bg-green-500 text-white"} capitalize py-1 px-4 rounded-full`}>
                {title}
            </span>
            <ul className="my-4">
                {data?.map((item, idx) => (
                    <Draggable key={item.id} draggableId={`task-${item.id}`} index={idx}>
                        {(provided) => (
                            <li
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                                className="bg-white my-2 p-2 shadow-sm rounded-lg"
                                tabIndex={0}
                            >
                                <div className="text-lg flex justify-between items-center gap-10">
                                    <h2 className="font-semibold">{item.title}</h2>

                                    {/* delete button */}
                                    <button
                                        className="cursor-pointer "
                                        onClick={() => deleteTask(item.id)} // Call deleteTask when clicked
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                            fill="none"
                                            stroke="gray"
                                            className='hover:stroke-red-500'
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M3 6h18M9 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6" />
                                            <path d="M10 11v6M14 11v6" />
                                        </svg>
                                    </button>
                                </div>
                                <p>{item.description}</p>

                                <p className="flex justify-between items-center py-2 pt-4">
                                    <span className="text-sm font-semibold">{item?.assignedTo}</span>
                                    <span className="text-sm">{item?.dueDate}</span>
                                </p>
                            </li>
                        )}
                    </Draggable>
                ))}
            </ul>

        </div>
    );
}

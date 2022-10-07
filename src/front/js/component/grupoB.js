import React from "react";
import { useState } from "react";
import "../../styles/grupos.css";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialTasks = [
  {
    id: "1",
    text: "Inglaterra",
  },
  {
    id: "2",
    text: "Irán",
  },
  {
    id: "3",
    text: "Estados Unidos",
  },
  {
    id: "4",
    text: "Gales",
  },
];

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function GrupoB() {
  const [tasks, setTasks] = useState(initialTasks);
  return (
    <DragDropContext
      onDragEnd={(result) => {
        const { source, destination } = result;
        if (!destination) {
          return;
        }
        if (
          source.index === destination.index &&
          source.droppableId === destination.droppableId
        ) {
          return;
        }

        setTasks((prevTasks) =>
          reorder(prevTasks, source.index, destination.index)
        );
      }}
    >
      <div className="grupos">
        <div className="Letra">GrupoB</div>
        <div className="posiciones">
        <ul >
            <li className="posicion">1</li>
            <li className="posicion">2</li>
            <li className="posicion">3</li>
            <li className="posicion">4</li>
        </ul>
        </div>
        <Droppable droppableId="tasks">
          {(droppableProvided) => (
            <div className="posiciones2">
            <ul
              {...droppableProvided.droppableProps}
              ref={droppableProvided.innerRef}
              
            >
              {tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(draggableProvided) => (
                    <li
                      {...draggableProvided.draggableProps}
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.dragHandleProps}
                      className="task-item Equipo"
                    >
                      {task.text}
                    </li>
                  )}
                </Draggable>
              ))}
              {droppableProvided.placeholder}
            </ul>
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default GrupoB;
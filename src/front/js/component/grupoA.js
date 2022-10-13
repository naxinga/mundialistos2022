import React from "react";
import { useState } from "react";
import "../../styles/grupos.css";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialTasksGA = [
  {
    id: "1",
    team: "Qatar",
  },
  {
    id: "2",
    team: "Ecuador",
  },
  {
    id: "3",
    team: "Senegal",
  },
  {
    id: "4",
    team: "Países Bajos",
  },
];

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function GrupoA() {
  const [tasksGA, setTasksGA] = useState(initialTasksGA);
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

        setTasksGA((prevTasks) =>
          reorder(prevTasks, source.index, destination.index)
        );
      }}
    >
      <div className="grupos">
        <div className="Letra">Grupo A</div>
        <div className="posiciones">
        <ul >
            <li className="posicion">1</li>
            <li className="posicion">2</li>
            <li className="posicion">3</li>
            <li className="posicion">4</li>
        </ul>
        </div>
        <Droppable droppableId="tasksGA">
          {(droppableProvided) => (
            <div className="posiciones2">
            <ul
              {...droppableProvided.droppableProps}
              ref={droppableProvided.innerRef}
              
            >
              {tasksGA.map((taskGA, index) => (
                <Draggable key={taskGA.id} draggableId={taskGA.id} index={index}>
                  {(draggableProvided) => (
                    <li
                      {...draggableProvided.draggableProps}
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.dragHandleProps}
                      className="task-item Equipo"
                    >
                      {taskGA.team}
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

export default GrupoA;
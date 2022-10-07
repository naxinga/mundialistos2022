import React from "react";
import { useState } from "react";
import "../../styles/grupos.css";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialTasksGF = [
  {
    id: "1",
    team: "Bélgica",
  },
  {
    id: "2",
    team: "Canadá",
  },
  {
    id: "3",
    team: "Marruecos",
  },
  {
    id: "4",
    team: "Croacia",
  },
];

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function GrupoF() {
  const [tasksGF, setTasksGF] = useState(initialTasksGF);
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

        setTasksGF((prevTasks) =>
          reorder(prevTasks, source.index, destination.index)
        );
      }}
    >
      <div className="grupos">
        <div className="Letra">GrupoF</div>
        <div className="posiciones">
        <ul >
            <li className="posicion">1</li>
            <li className="posicion">2</li>
            <li className="posicion">3</li>
            <li className="posicion">4</li>
        </ul>
        </div>
        <Droppable droppableId="tasksGF">
          {(droppableProvided) => (
            <div className="posiciones2">
            <ul
              {...droppableProvided.droppableProps}
              ref={droppableProvided.innerRef}
              
            >
              {tasksGF.map((taskGF, index) => (
                <Draggable key={taskGF.id} draggableId={taskGF.id} index={index}>
                  {(draggableProvided) => (
                    <li
                      {...draggableProvided.draggableProps}
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.dragHandleProps}
                      className="task-item Equipo"
                    >
                      {taskGF.team}
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

export default GrupoF;
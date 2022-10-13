import React from "react";
import { useState } from "react";
import "../../styles/grupos.css";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialTasksGH = [
  {
    id: "1",
    text: "Portugal",
  },
  {
    id: "2",
    text: "Ghana",
  },
  {
    id: "3",
    text: "Uruguay",
  },
  {
    id: "4",
    text: "Corea del Sur",
  },
];

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function GrupoH() {
  const [tasksGH, setTasksGH] = useState(initialTasksGH);
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

        setTasksGH((prevTasks) =>
          reorder(prevTasks, source.index, destination.index)
        );
      }}
    >
      <div className="grupos">
        <div className="Letra">Grupo H</div>
        <div className="posiciones">
        <ul >
            <li className="posicion">1</li>
            <li className="posicion">2</li>
            <li className="posicion">3</li>
            <li className="posicion">4</li>
        </ul>
        </div>
        <Droppable droppableId="tasksGH">
          {(droppableProvided) => (
            <div className="posiciones2">
            <ul
              {...droppableProvided.droppableProps}
              ref={droppableProvided.innerRef}
              
            >
              {tasksGH.map((taskGH, index) => (
                <Draggable key={taskGH.id} draggableId={taskGH.id} index={index}>
                  {(draggableProvided) => (
                    <li
                      {...draggableProvided.draggableProps}
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.dragHandleProps}
                      className="task-item Equipo"
                    >
                      {taskGH.text}
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

export default GrupoH;
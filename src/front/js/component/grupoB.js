import React from "react";
import { useState } from "react";
import "../../styles/grupos.css";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialTasksGB = [
  {
    id: "1",
    team: "Inglaterra",
  },
  {
    id: "2",
    team: "Irán",
  },
  {
    id: "3",
    team: "Estados Unidos",
  },
  {
    id: "4",
    team: "Gales",
  },
];

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function GrupoB() {
  const [tasksGB, setTasksGB] = useState(initialTasksGB);
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

        setTasksGB((prevTasks) =>
          reorder(prevTasks, source.index, destination.index)
        );
      }}
    >
      <div className="grupos">
        <div className="Letra">Grupo B</div>
        <div className="posiciones">
        <ul >
            <li className="posicion">1</li>
            <li className="posicion">2</li>
            <li className="posicion">3</li>
            <li className="posicion">4</li>
        </ul>
        </div>
        <Droppable droppableId="tasksGB">
          {(droppableProvided) => (
            <div className="posiciones2">
            <ul
              {...droppableProvided.droppableProps}
              ref={droppableProvided.innerRef}
              
            >
              {tasksGB.map((taskGB, index) => (
                <Draggable key={taskGB.id} draggableId={taskGB.id} index={index}>
                  {(draggableProvided) => (
                    <li
                      {...draggableProvided.draggableProps}
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.dragHandleProps}
                      className="task-item Equipo"
                    >
                      {taskGB.team}
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